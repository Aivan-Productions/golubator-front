<template>
    <div class="flex flex-col w-[500px] h-[700px] bg-white rounded-2xl shadow-lg p-3 overflow-hidden">
        <ul class="flex flex-col gap-3 p-3 overflow-y-auto flex-grow no-scrollbar">
            <li v-for="(message, index) in messages" :key="message.id"
                class="flex justify-start max-w-[80%] p-3 bg-[#F2F2F2] rounded-xl shadow-md self-start w-fit relative">
                <div class="flex flex-col">
                    <div>{{ message.text }}</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">{{ message.emoji }}</span>
                    <span class="text-xs text-gray-500">{{ message.timestamp }}</span>
                </div>
            </li>
        </ul>
        <div class="grid grid-cols-[1fr_auto] gap-3 p-3 bg-[#F2F2F2] rounded-xl items-center">
            <input class="p-2 pl-5 pr-5 border border-gray-300 rounded-full flex-grow" type="text"
                placeholder="Input text">
            <button
                class="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex justify-center items-center text-gray-600 shadow-md hover:bg-gray-100">➤</button>
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from '../utils/axios';

interface Message {
    text: string;
    emoji: string;
    timestamp: string;
}

const messages = ref<Message[]>([]);

const axiosMessage = async () => {
    try {
        const response = await axios.get<Message[]>(
            '/messages'
        );
        messages.value = response.data;
        console.log(messages.value);
    } catch (error: any) {
        console.error('Error with get data:', error.message);

        // Дополнительная информация об ошибке
        if (error.response) {
            console.log('Response error data:', error.response.data);
            console.log('Response error status:', error.response.status);
        } else if (error.request) {
            console.log('Request error:', error.request);
        } else {
            console.log('Unknown error:', error.message);
        }
    }
}

onMounted(() => {
    axiosMessage()
})
</script>

