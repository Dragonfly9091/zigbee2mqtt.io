"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50781],{19798:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>c});var o=i(6254);const n={},a=(0,i(52753).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"tuya-zg-204zm",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-zg-204zm"},[(0,o.Lk)("span",null,"Tuya ZG-204ZM")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"ZG-204ZM")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"PIR 24Ghz human presence sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"presence, motion_state, illuminance, battery, fading_time, static_detection_distance, static_detection_sensitivity, indicator, motion_detection_mode, motion_detection_sensitivity")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-204ZM.png",alt:"Tuya ZG-204ZM"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The manufacturer provides a good <a href="https://doc.szalarm.com/zg-205Z/en/" target="_blank" rel="noopener noreferrer">technical in-depth document</a> that explains what the various settings mean, good default values for those, a recommended method for trimming these values and various other considerations (like installation position) to get good results.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="motion-state-enum" tabindex="-1"><a class="header-anchor" href="#motion-state-enum"><span>Motion state (enum)</span></a></h3><p>Motion state. Value can be found in the published state on the <code>motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>large</code>, <code>small</code>, <code>static</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>Presence keep time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>28800</code>. The unit of this value is <code>s</code>.</p><h3 id="static-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-distance-numeric"><span>Static detection distance (numeric)</span></a></h3><p>Static detection distance. Value can be found in the published state on the <code>static_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="static-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-sensitivity-numeric"><span>Static detection sensitivity (numeric)</span></a></h3><p>Static detection sensitivity. Value can be found in the published state on the <code>static_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary"><span>Indicator (binary)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="motion-detection-mode-enum" tabindex="-1"><a class="header-anchor" href="#motion-detection-mode-enum"><span>Motion detection mode (enum)</span></a></h3><p>Motion detection mode (Firmware version&gt;=0122052017). Value can be found in the published state on the <code>motion_detection_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>only_pir</code>, <code>pir_and_radar</code>, <code>only_radar</code>.</p><h3 id="motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motion-detection-sensitivity-numeric"><span>Motion detection sensitivity (numeric)</span></a></h3><p>Motion detection sensitivity (Firmware version&gt;=0122052017). Value can be found in the published state on the <code>motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p>',22))])}]]),c=JSON.parse('{"path":"/devices/ZG-204ZM.html","title":"Tuya ZG-204ZM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZG-204ZM control via MQTT","description":"Integrate your Tuya ZG-204ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Motion state (enum)","slug":"motion-state-enum","link":"#motion-state-enum","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Static detection distance (numeric)","slug":"static-detection-distance-numeric","link":"#static-detection-distance-numeric","children":[]},{"level":3,"title":"Static detection sensitivity (numeric)","slug":"static-detection-sensitivity-numeric","link":"#static-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Indicator (binary)","slug":"indicator-binary","link":"#indicator-binary","children":[]},{"level":3,"title":"Motion detection mode (enum)","slug":"motion-detection-mode-enum","link":"#motion-detection-mode-enum","children":[]},{"level":3,"title":"Motion detection sensitivity (numeric)","slug":"motion-detection-sensitivity-numeric","link":"#motion-detection-sensitivity-numeric","children":[]}]}],"git":{"updatedTime":1740254991000},"filePathRelative":"devices/ZG-204ZM.md"}')}}]);