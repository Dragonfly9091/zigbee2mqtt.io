"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55069],{40665:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>i,data:()=>l});var e=a(6254);const t={},i=(0,a(52753).A)(t,[["render",function(n,s){const a=(0,e.g2)("RouteLink");return(0,e.uX)(),(0,e.CE)("div",null,[s[3]||(s[3]=(0,e.Lk)("h1",{id:"home-assistant-integration",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#home-assistant-integration"},[(0,e.Lk)("span",null,"Home Assistant integration")])],-1)),(0,e.Lk)("p",null,[s[1]||(s[1]=(0,e.eW)("See: ")),(0,e.bF)(a,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,e.k6)((()=>s[0]||(s[0]=[(0,e.eW)("Home Assistant integration guide")]))),_:1}),s[2]||(s[2]=(0,e.eW)("."))]),s[4]||(s[4]=(0,e.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: Home Assistant integration (MQTT discovery)</span></span>\n<span class="line"><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Enable the integration (default: false)</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant discovery topic (default: shown below)</span></span>\n<span class="line">    <span class="token comment"># Note: should be different from [MQTT base topic](../mqtt.md) to prevent errors in HA software</span></span>\n<span class="line">    <span class="token key atrule">discovery_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant status topic (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">status_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant/status&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Experimental support for Home Assistant event entities, may break in the future (default: shown below) when enabled:</span></span>\n<span class="line">    <span class="token comment"># - An `event` entity will be discovered for each &#39;action&#39;.</span></span>\n<span class="line">    <span class="token comment"># - The `event_type` attribute will contain the action itself, additional attributes like `button` will have further information.</span></span>\n<span class="line">    <span class="token key atrule">experimental_event_entities</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant legacy action sensor (default: `false`), when enabled:</span></span>\n<span class="line">    <span class="token comment"># - Zigbee2MQTT will send an empty &#39;action&#39; after one has been send</span></span>\n<span class="line">    <span class="token comment"># - A &#39;sensor_action&#39; will be discovered</span></span>\n<span class="line">    <span class="token key atrule">legacy_action_sensor</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3))])}]]),l=JSON.parse('{"path":"/guide/configuration/homeassistant.html","title":"Home Assistant integration","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1740254991000},"filePathRelative":"guide/configuration/homeassistant.md"}')}}]);