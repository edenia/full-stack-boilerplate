include ../utils/meta.mk ../utils/help.mk

LATEST_TAG ?= latest

install: ##@local Install all dependencies
install:
	@npm install

clean-install: ##@local Reinstalls all dependencies
clean-install:
	@rm -Rf node_modules
	@npm install

run: ##@local Run the project locally (without docker)
run: node_modules
	@$(SHELL_EXPORT) npm run dev

build-docker: ##@devops Build the docker image
build-docker: ./Dockerfile
	echo "Building containers..."
	@docker pull $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(LATEST_TAG) || true
	@docker build \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(VERSION) \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(LATEST_TAG) \
	  --build-arg next_public_version="$(NEXT_PUBLIC_VERSION)" \
		--build-arg next_public_name="$(NEXT_PUBLIC_NAME)" \
		--build-arg next_public_title="$(NEXT_PUBLIC_TITLE)" \
		--build-arg next_public_logo="$(NEXT_PUBLIC_LOGO)" \
		--build-arg next_public_footer_links="$(NEXT_PUBLIC_FOOTER_LINKS)" \
		--build-arg next_public_network_chain_index="$(NEXT_PUBLIC_NETWORK_CHAIN_INDEX)" \
		--build-arg next_public_custom_network_chain="$(NEXT_PUBLIC_CUSTOM_NETWORK_CHAIN)" \
		--build-arg next_public_hasura_url="$(NEXT_PUBLIC_HASURA_URL)" \
		.

pull-image: ##@devops Pull the latest image from registry for caching
pull-image:
	@docker pull $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(LATEST_TAG) || true

build-docker-cached: ##@devops Build the docker image using cached layers
build-docker-cached: ./Dockerfile
	@docker build \
		--target prod-stage \
		--cache-from $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(LATEST_TAG) \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(VERSION) \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(LATEST_TAG) \
		.

push-image: ##@devops Push the freshly built image and tag with release or latest tag
push-image:
	@docker push $(DOCKER_REGISTRY)/$(IMAGE_NAME_WEBAPP):$(VERSION)
