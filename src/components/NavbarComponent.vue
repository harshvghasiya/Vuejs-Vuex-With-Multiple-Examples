<template>

<nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
            <router-link class="navbar-brand text-light fw-bold" to="/">Vuex</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <router-link class="nav-link active text-light" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light" to="/counter">Counter</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light" to="/employee">Employee</router-link>
                    </li>
                    
                </ul>
               
            </div>
        </div>
    </nav>
</template>
<script>
export default{
    name:'NavbarComponent'
}
</script>
