#!/usr/bin/env sh

set -e

mysql_ready='nc -z db-headless 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

if wp core is-installed
then
    echo "WordPress is already installed, exiting."
    exit
fi

wp core download --force

[ -f wp-config.php ] || wp config create \
    --dbhost="$WORDPRESS_DB_HOST" \
    --dbname="$WORDPRESS_DB_NAME" \
    --dbuser="$WORDPRESS_DB_USER" \
    --dbpass="$WORDPRESS_DB_PASSWORD"

wp core install \
    --url="$WORDPRESS_URL" \
    --title="$WORDPRESS_TITLE" \
    --admin_user="$WORDPRESS_ADMIN_USER" \
    --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
    --admin_email="$WORDPRESS_ADMIN_EMAIL" \
    --skip-email


wp server --host=0.0.0.0