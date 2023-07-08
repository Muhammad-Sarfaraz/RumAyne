export const world = {
    install(app) {
      app.config.globalProperties.$world = {
        execute() {
          return "Hello World!"; 
        },
      };
    },
  };