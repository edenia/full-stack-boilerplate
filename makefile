SHELL := /bin/bash
BLUE   := $(shell tput -Txterm setaf 6)
RESET  := $(shell tput -Txterm sgr0)

run:
	make -B postgres
	make -B wallet
	make -B hapi
	make -B hasura
	make -B webapp
	make -j 2 logs hasura-cli

postgres:
	@docker-compose stop postgres
	@docker-compose up -d --build postgres
	@echo "done postgres"

wallet:
	@docker-compose stop wallet
	@docker-compose up -d --build wallet
	@echo "done wallet"

hapi:
	@docker-compose stop hapi
	@docker-compose up -d --build hapi
	@echo "done hapi"

hasura:
	$(eval -include .env)
	@until \
		docker-compose exec -T postgres pg_isready; \
		do echo "$(BLUE)$(STAGE)-$(APP_NAME)-hasura |$(RESET) waiting for postgres service"; \
		sleep 5; done;
	@until \
		curl http://localhost:9090/healthz; \
		do echo "$(BLUE)$(STAGE)-$(APP_NAME)-hasura |$(RESET) waiting for hapi service"; \
		sleep 5; done;
	@echo "..."
	@docker-compose stop hasura
	@docker-compose up -d --build hasura
	@echo "done hasura"

hasura-cli:
	$(eval -include .env)
	@until \
		curl http://localhost:8080/healthz; \
		do echo "$(BLUE)$(STAGE)-$(APP_NAME)-hasura |$(RESET) ..."; \
		sleep 5; done;
	@echo "..."
	@cd hasura && hasura console --endpoint http://localhost:8080 --skip-update-check --no-browser --admin-secret $(HASURA_GRAPHQL_ADMIN_SECRET);

webapp:
	$(eval -include .env)
	# @until \
	# 	curl http://localhost:8080/healthz; \
	# 	do echo "$(BLUE)$(STAGE)-$(APP_NAME)-webapp |$(RESET) waiting for hasura service"; \
	# 	sleep 5; done;
	# @echo "..."
	@docker-compose stop webapp
	@docker-compose up -d --build webapp
	@echo "done webapp"

logs:
	@docker-compose logs -f hapi webapp

stop:
	@docker-compose stop