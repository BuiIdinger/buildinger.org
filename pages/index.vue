<template>
  <div class="p-[60px]">
    <div>
      <p>shayden</p>
    </div>
    <div>
      <p>auckland, new zealand</p>
    </div>
    <div>
      <div class="mt-[20px]">
        <div class="font-bold">
          <p>Primary langs (I'm mainly cpp)</p>
        </div>
        <div class="flex gap-[14px]">
          <Cpp />
          <C />
          <CMake />
        </div>
      </div>
      <div class="mt-[20px]">
        <div class="font-bold">
          <p>Web dev stuff</p>
        </div>
        <div class="flex gap-[14px]">
          <Markup />
          <Css />
          <Tailwind />
          <Javascript />
          <Typescript />
          <Nuxt />
          <Vue />
        </div>
      </div>
      
      <div class="mt-[20px]">
        <div class="font-bold">
          <p>Databases</p>
        </div>
        <div class="flex gap-[14px]">
          <Cassandra />
        </div>
      </div>

      <div class="mt-[20px]">
        <div class="font-bold">
          <p>OS & software</p>
        </div>
        <div class="flex gap-[14px]">
          <Linux />
          <Nginx />
          <Ubuntu />
        </div>
      </div>

      <div class="mt-[20px]">
        <div class="font-bold">
          <p>IDES, I use vsc on mac, vs on win</p>
        </div>
        <div class="flex gap-[14px]">
          <VisualStudio />
          <VisualStudioCode />
        </div>
      </div>

      <div class="mt-[20px]">
        <div class="font-bold">
          <p>OS I use for programming (depends on what system calls I need to do)</p>
        </div>
        <div class="flex gap-[14px]">
          <Windows />
          <Apple />
          <Ubuntu />
        </div>
      </div>

      <div class="mt-[20px]">
        <div class="font-bold">
          <p>Other</p>
        </div>
        <div class="flex gap-[14px]">
          <Cloudflare />
          <Github />
        </div>
      </div>




    </div>
    <div class="mt-[48px]">
      <ul class="list-disc">
        <li class="list-disc">CEO of SurveyBlox Ltd | Still current</li>
        <p>- Implemented a Cassandra database, with 3 nodes, 1 node in US, EU, AU.</p>
        <p>- Fast and efficent table queries, by making my tables around my queries. Gave a 28% faster load time when getting startup data.</p>
        <p>- Spread data around evenly around using bucket_hashes, primary keys etc.</p>
        <p>- WebSocket server in C++, multi-threaded by using a efficent thread pool, able to distribute requests evenly.</p>
        <p>- Internal backend communication using tcp sockets with ssl to broadcast information to other servers.</p>
        <p>- Frontend, using nuxt.</p>
        <p>- Load balancing using Cloudflare, with a 86% increase in response times.</p>
      </ul>
      <ul class="list-disc mt-[15px]">
        <li class="list-disc">Apple Inc. | Software Development Engineer - C/C++ | Still current </li>
        <p>- Working on iPhone, iPad, Watch, Mac, Apple TV, Apple Display, Vision Pro and AirPods, adding features, fixing issues, optimizing code.</p>
        <p>- Debugging issues on these devices.</p>
        <p>- Working on the xnu kernal.</p>
      </ul>
    </div>

    <div class="mt-[48px]">
      <h1 class="font-bold text-[16px]">open source projects</h1>
      <ul class="list-disc">
        <li class="list-disc mt-[15px]">Chrome</li>
        <p>- Fixing issues reported by users.</p>
        <p>- Implemented new css features in blink.</p>
        <p>- Cleaning up messy code.</p>
      </ul>
      <ul class="list-disc">
        <li class="list-disc mt-[15px]">ChromeOS</li>
        <p>- Fixing issues reported by users.</p>
        <p>- Cleaning up messy code.</p>
      </ul>
    </div>

    <div class="mt-[48px]">
      <h1 class="font-bold text-[16px]">personal projects</h1>
      <ul class="list-disc">
        <li class="list-disc mt-[15px]">BWebServer</li>
        <p>( I use this webserver for all my projects, or businesses that i own )</p>
        <p>- Implemented a WebServer using C++, and linux sockets using epoll eventing system.</p>
        <p>- Storing files contents in memory, rather than accessing them on disk everytime.</p>
        <p>- IP logging and error logging.</p>
        <p>- Using thread pool to balance requests onto the least loaded thread.</p>
        <p>- Add headers, remove headers, get a request header by calling a function.</p>
        <p>- SSL using boring ssl</p>
        <p>- Able to add virual hosts to add different sites</p>
      </ul>
      <ul class="list-disc">
        <li class="list-disc mt-[15px]">BWebSockets</li>
        <p>( I use this websocket server for all my projects, or businesses that i own )</p>
        <p>- Implemented a WebSocket server using C++, and linux sockets using epoll eventing system.</p>
        <p>- Inter server communication using tcp sockets, and boring ssl, to broadcat and send data to other servers.</p>
        <p>- IP logging and error logging.</p>
        <p>- Using thread pool to balance requests onto the least loaded thread.</p>
      </ul>
    </div>
  </div>
</template>