#!/bin/bash

gulp prod --theme primary
gulp prod --layout horizontal_navbar_iconbar --navbar horizontal_iconbar --sidebar empty --theme primary
gulp prod --layout horizontal_navbar --navbar horizontal --sidebar empty --theme primary
gulp prod --layout sidebar_compact --sidebar compact --sidebarPosition fixed --theme primary
gulp prod --layout sidebar_sections --sidebar sections --sidebarPosition fixed --theme primary
gulp prod --layout sidebar_iconbar_compact --sidebar iconbar_compact --theme primary
gulp prod --layout sidebar_iconbar --sidebar iconbar --theme primary
