<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,700;1,100&display=swap");

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  background-color: #1755ca;
  overflow-x: hidden;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  min-height: 100%;
  background-color: #1755ca;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #071f4c;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
