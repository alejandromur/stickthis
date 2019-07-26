<h1>Stickthis</h1>
<p>Stickthis. A simple jQuery Plugin to fix whatever element to the top of the browser. No pretentions, just for fun.</p>
<p><a href="https://www.mamutlove.com/projects/stickthis/" title="Demo" target="_blank">Demo</a></p>
<p>Please, take this little <a href="https://www.mamutlove.com/projects/stickthis/" title="Demo" target="_blank">demo</a> as it is, a demo where I pretend to show to you the power of this plugin, but consider your own target before copy/paste the code.</p>

<h2>Customizable</h2>
<p>• You could change the name of the class that is going to be added to the element ('sticked' by default). Remember then to apply your styles to this new class.</p>
<p>• Customize or change the CSS files.</p>

<h2>Usage</h2>
<p>• Download or fork the repository.</p>
<p>• Include jQuery and the Javascript file minify or not in your HTML.</p>
<p>• Initialize the plugin</p>
<pre>
$(".your-element-selector").stickthis();
<br>
<b>// some options are customizable</b>
$(".stickthis").stickthis({
    classname : "sticked", // asgin the class you like the most
    complete : function(){ // callback
        console.log('callback CUSTOM');
    }
});
</pre>

<h2>Credits</h2>
<p>• Feel free to download, modify, break, use or destroy this plugin.</p>
