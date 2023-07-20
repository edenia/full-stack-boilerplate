-include .env

VERSION ?= $(shell git rev-parse --short HEAD)
CURRENT_BRANCH ?= $(shell git rev-parse --abbrev-ref HEAD)

IMAGE_NAME_WEBAPP=webapp
IMAGE_NAME_HAPI=hapi
IMAGE_NAME_HASURA=hasura
IMAGE_NAME_WALLET=wallet

IMAGE_ID=$(shell docker images --format '{{.ID}}' --filter reference='docker.pkg.github.com/edenia/edenia.com*latest')
DOCKER_REGISTRY=ghcr.io/edenia
SUBDIRS = webapp hapi hasura wallet

MAKE_ENV += DOCKER_REGISTRY VERSION IMAGE_NAME_WEBAPP IMAGE_NAME_HAPI IMAGE_NAME_WALLET IMAGE_NAME_HASURA

SHELL_EXPORT := $(foreach v,$(MAKE_ENV),$(v)='$($(v))')

ifneq ("$(wildcard .env)", "")
	export $(shell sed 's/=.*//' .env)
endif
