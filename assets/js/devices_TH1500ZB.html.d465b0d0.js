"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92994],{69654:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>i});var d=t(6254);const a={},c=(0,t(52753).A)(a,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[8]||(o[8]=(0,d.Lk)("h1",{id:"sinope-th1500zb",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#sinope-th1500zb"},[(0,d.Lk)("span",null,"Sinopé TH1500ZB")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"TH1500ZB")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("Sinopé")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Zigbee dual pole line volt thermostat")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand, running_state), thermostat_occupancy, second_display_mode, thermostat_outdoor_temperature, outdoor_temperature_timeout, enable_outdoor_temperature, temperature_display_mode, time_format, backlight_auto_dim, keypad_lockout")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TH1500ZB.png",alt:"Sinopé TH1500ZB"})])],-1))])]),o[9]||(o[9]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,d.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of the thermostat. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="thermostat-occupancy-enum" tabindex="-1"><a class="header-anchor" href="#thermostat-occupancy-enum"><span>Thermostat occupancy (enum)</span></a></h3><p>Occupancy state of the thermostat. Value can be found in the published state on the <code>thermostat_occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_occupancy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_occupancy&quot;: NEW_VALUE}</code>. The possible values are: <code>unoccupied</code>, <code>occupied</code>.</p><h3 id="second-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#second-display-mode-enum"><span>Second display mode (enum)</span></a></h3><p>Displays the outdoor temperature and then returns to the set point in &quot;auto&quot; mode, or clears in &quot;outdoor temp&quot; mode when expired.. Value can be found in the published state on the <code>second_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;second_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;second_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>setpoint</code>, <code>outdoor temp</code>.</p><h3 id="thermostat-outdoor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#thermostat-outdoor-temperature-numeric"><span>Thermostat outdoor temperature (numeric)</span></a></h3><p>Outdoor temperature for the secondary display. Value can be found in the published state on the <code>thermostat_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-99.5</code> and the maximum value is <code>99.5</code>. The unit of this value is <code>°C</code>.</p><h3 id="outdoor-temperature-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-timeout-numeric"><span>Outdoor temperature timeout (numeric)</span></a></h3><p>Time in seconds after which the outdoor temperature is considered to have expired. Value can be found in the published state on the <code>outdoor_temperature_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>30</code> and the maximum value is <code>64800</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>15 min</code>, <code>30 min</code>, <code>1 hour</code>.</p><h3 id="enable-outdoor-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-binary"><span>Enable outdoor temperature (binary)</span></a></h3><p>DEPRECATED: Use second_display_mode or control via outdoor_temperature_timeout. Value can be found in the published state on the <code>enable_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable outdoor temperature is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="time-format-enum" tabindex="-1"><a class="header-anchor" href="#time-format-enum"><span>Time format (enum)</span></a></h3><p>The time format featured on the thermostat display. Value can be found in the published state on the <code>time_format</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_format&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_format&quot;: NEW_VALUE}</code>. The possible values are: <code>24h</code>, <code>12h</code>.</p><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum"><span>Backlight auto dim (enum)</span></a></h3><p>Control backlight dimming behavior. Value can be found in the published state on the <code>backlight_auto_dim</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_auto_dim&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on_demand</code>, <code>sensing</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables or disables the device’s buttons. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p>',23))])}]]),i=JSON.parse('{"path":"/devices/TH1500ZB.html","title":"Sinopé TH1500ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé TH1500ZB control via MQTT","description":"Integrate your Sinopé TH1500ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Thermostat occupancy (enum)","slug":"thermostat-occupancy-enum","link":"#thermostat-occupancy-enum","children":[]},{"level":3,"title":"Second display mode (enum)","slug":"second-display-mode-enum","link":"#second-display-mode-enum","children":[]},{"level":3,"title":"Thermostat outdoor temperature (numeric)","slug":"thermostat-outdoor-temperature-numeric","link":"#thermostat-outdoor-temperature-numeric","children":[]},{"level":3,"title":"Outdoor temperature timeout (numeric)","slug":"outdoor-temperature-timeout-numeric","link":"#outdoor-temperature-timeout-numeric","children":[]},{"level":3,"title":"Enable outdoor temperature (binary)","slug":"enable-outdoor-temperature-binary","link":"#enable-outdoor-temperature-binary","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Time format (enum)","slug":"time-format-enum","link":"#time-format-enum","children":[]},{"level":3,"title":"Backlight auto dim (enum)","slug":"backlight-auto-dim-enum","link":"#backlight-auto-dim-enum","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]}]}],"git":{"updatedTime":1740254991000},"filePathRelative":"devices/TH1500ZB.md"}')}}]);