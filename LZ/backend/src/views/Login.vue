<template>
    <GuestLayout title="Entre na sua conta" @submit="login">

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="mt-2">
                        <input type="checkbox" value="lsRememberMe" id="rememberMe" class="rounded-md">
                        <label for="rememberMe" class="mx-2 text-sm font-medium leading-6 text-gray-900">Mantenha
                            Conectado</label>
                    </div>

                    <div class="text-sm">
                        <a href="/RequestPassword" class="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu sua
                            senha?</a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar
                    </button>
                </div>

        </div>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from '../components/GuestLayout.vue';
</script>
