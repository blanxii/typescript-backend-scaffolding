DOCKER_COMPOSE=docker-compose

.PHONY: help
help:
	@grep '^[^#[:space:]].*:' Makefile | egrep -v '^.PHONY:' | sed 's/\:/ /g' | tr -d "\n\r"

.PHONY: up
up:
	$(DOCKER_COMPOSE) up -d

.PHONY: build
build:
	$(DOCKER_COMPOSE) exec app npm i; $(DOCKER_COMPOSE) restart app

.PHONY: tests
tests:
	$(DOCKER_COMPOSE) exec app npm run test:cs; $(DOCKER_COMPOSE) exec backend npm run test;
