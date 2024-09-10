<script setup>
import { GITHUB_LINK, LINKEDIN_LINK } from '../constants';
const { data: posts } = await useAsyncData('latest-posts', () => queryContent('/blog').sort({ date: 1 }).limit(3).find())

</script>

<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">☕ Hey!</h1>
        <!-- <p class="text-base text-gray-900 p-2 italic">Software Developer</p> -->
    </section>

    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-3xl font-bold mt-8">I'm Tiago Villa.</h2>
            <p class="text-lg py-2">I am a brazilian software developer currently based in the Netherlands. My
                current tech stack includes stuff like PHP, TypeScript, React and Vue, but it is always changing and
                expanding.</p>
            <p class="text-lg py-2">In my spare time, I'm currently learning and dabbling with creative development and
                3D modelling, focusing in technologies like Three.js and WebGL to create immersive and interactive
                experiences on the web.</p>
            <p class="text-lg py-2">You can find more about me on <a class="underline decoration-sky-500"
                    :href="LINKEDIN_LINK">LinkedIn</a> and <a class="underline decoration-sky-500"
                    :href="GITHUB_LINK">Github</a>.</p>
        </div>
        <!-- <img class="w:1/2 md:max-w-sm p-8 mx-auto"> -->
    </section>

    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
        <section class="grid md:grid-cols-3 mt-8 gap-10">
            <!-- <Post :posts="posts" /> -->
            <p class="text-2xl">Soon!</p>
        </section>
    </section>
</template>