<template>
    <div class="flex flex-col w-[500px] h-[700px] bg-white rounded-2xl shadow-lg p-3 overflow-hidden">
        <div class="flex flex-col gap-3 p-3 overflow-y-auto flex-grow no-scrollbar">
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>Hello, guys. I’m g.... Hello, guys. I’m g.... Hello, guys. I’m g.... Hello, guys. I’m g.... Hello, guys. I’m g.... Hello, guys. I’m g....</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-start max-w-[80%] p-3 bg-[#F2F2F2] rounded-xl shadow-md self-start w-fit relative">
                <div class="flex flex-col">
                    <div>It is a long established fact that a reader will be distracted</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤓</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>It is a long established fact that a reader will be distracted</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">😍</span>
                    <span class="text-xs text-gray-500">12:31</span>
                </div>
            </div>
            <div class="flex justify-start max-w-[80%] p-3 bg-[#F2F2F2] rounded-xl shadow-md self-start w-fit relative">
                <div class="flex flex-col">
                    <div>It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">😴</span>
                    <span class="text-xs text-gray-500">12:31</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>Hello, guys. I’m g....</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>.</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>.</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>.</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>.</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤢</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
            <div class="flex justify-end max-w-[80%] p-3 bg-green-200 rounded-xl shadow-md self-end w-fit relative">
                <div class="flex flex-col">
                    <div>It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">😍</span>
                    <span class="text-xs text-gray-500">12:31</span>
                </div>
            </div>
            <div class="flex justify-start max-w-[80%] p-3 bg-[#F2F2F2] rounded-xl shadow-md self-start w-fit relative">
                <div class="flex flex-col">
                    <div>It is a long established fact that a reader will be distracte It is a long established fact that a reader will be distracte It is a long established fact that a reader will be distracte It is a long established fact that a reader will be distracte d</div>
                </div>
                <div class="flex flex-col items-end justify-between ml-5">
                    <span class="text-lg">🤓</span>
                    <span class="text-xs text-gray-500">12:30</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-[1fr_auto] gap-3 p-3 bg-[#F2F2F2] rounded-xl items-center">
            <input class="p-2 border border-gray-300 rounded-full flex-grow" type="text" placeholder="Input text">
            <button class="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex justify-center items-center text-gray-600 shadow-md hover:bg-gray-100">➤</button>
        </div>
    </div>
    
</template>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const chatContainer = document.querySelector(".overflow-y-auto");
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });
</script>

<script setup lang="ts"></script>
