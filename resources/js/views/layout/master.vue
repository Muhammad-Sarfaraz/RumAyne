<template>
    <main>
      <div class="container">
        <div class="grid">
          <div class="row">
            <div class="col-1">
              <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
              </nav>
            </div>

            <slot name="content">
            </slot>
       
            <div class="col-1">
              <nav class="text-right">
                <a target="_blank" href="https://github.com/Muhammad-Sarfaraz/AuraVue">
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>
  
        <div class="row">
          <div class="col-1">
            <footer>
              <span>🎉</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>

export default{

}
</script>