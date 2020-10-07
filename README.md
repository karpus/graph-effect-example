# graph

> Graph Effect Example

## Краткое описание скриптов и задач


./src/components/GraphContainer.vue - Компонент, в котором предстален простой пользовательский интерфейс и связана вся логика
./src/lib/graph/graphContainer.js - Легкая абстракция над графическими эфектами и фабрика для создания эффектов (method factory)
./src/lib/graph/effect - Папка с эффектами, в папке находятся примеры эффектов и шаблоны которые надо реализовать. Sepia -пример работающего эффекта.

## Установка 

``` bash

# Клонируем репозиторий
git clone https://github.com/karpus/graph-effect-example.git

# install dependencies 
npm install

# serve with hot reload at localhost:8080
npm run dev

# Переходим по адресу localhost:8080

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```