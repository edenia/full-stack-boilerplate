FROM ubuntu:22.04 as install-stage

ENV WORK_DIR /opt/application
ENV EOSIO_PACKAGE_URL https://github.com/AntelopeIO/leap/releases/download/v4.0.4/leap_4.0.4-ubuntu20.04_amd64.deb


# Install wget
RUN apt-get update && apt-get install -y wget

# Install Antelope
RUN wget -O antelope.deb $EOSIO_PACKAGE_URL
RUN apt-get install -y /antelope.deb

# Remove all of the unnecesary files and apt cache
RUN rm ./antelope.deb \
  && apt-get remove -y wget \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Define working directory
WORKDIR $WORK_DIR

# Copy application code
COPY ./ $WORK_DIR

# ------------------------------

FROM install-stage as run-stage

ENV WORK_DIR /opt/application

EXPOSE 8888

ENTRYPOINT keosd --data-dir $WORK_DIR/data --config-dir $WORK_DIR/config
