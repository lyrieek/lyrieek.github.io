<template>
	<div>
		<article class="api-reference Configuration javascript">



			<div class="api-article"></div>

			<h3 id="messages">
				<a href="#messages">messages </a><code>Object</code>
			</h3>

			<p>Defines the text of the labels that are shown within the alert dialog. Used primarily for localization.</p>

			<h4>Example</h4>

			<div class="action-buttons"><button class="btn btn-edit" title="Edit example">Edit</button><button class="btn btn-run" title="Run example">Preview</button><a href="https://dojo.telerik.com" class="btn btn-dojo" title="Open example in Kendo UI Dojo">Open In Dojo</a></div>
			<pre class="prettyprint prettyprinted" style=""><code><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"alert"</span><span class="tag">&gt;&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;script&gt;</span><span class="pln">
$</span><span class="pun">(</span><span class="str">"#alert"</span><span class="pun">).</span><span class="pln">kendoAlert</span><span class="pun">({</span><span class="pln">
  messages</span><span class="pun">:{</span><span class="pln">
    okText</span><span class="pun">:</span><span class="pln"> </span><span class="str">"OK"</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}).</span><span class="pln">data</span><span class="pun">(</span><span class="str">"kendoAlert"</span><span class="pun">).</span><span class="pln">open</span><span class="pun">();</span><span class="pln">
</span><span class="tag">&lt;/script&gt;</span></code></pre>

			<h3 id="messagesoktext">
				<a href="#messagesoktext">messages.okText </a><code>String</code> <em>(default: "OK")</em>
			</h3>

			<p>The title of the OK button.</p>

			<h4>Example</h4>

			<div class="action-buttons"><button class="btn btn-edit" title="Edit example">Edit</button><button class="btn btn-run" title="Run example">Preview</button><a href="https://dojo.telerik.com" class="btn btn-dojo" title="Open example in Kendo UI Dojo">Open In Dojo</a></div>
			<pre class="prettyprint prettyprinted" style=""><code><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"alert"</span><span class="tag">&gt;&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;script&gt;</span><span class="pln">
$</span><span class="pun">(</span><span class="str">"#alert"</span><span class="pun">).</span><span class="pln">kendoAlert</span><span class="pun">({</span><span class="pln">
  messages</span><span class="pun">:{</span><span class="pln">
    okText</span><span class="pun">:</span><span class="pln"> </span><span class="str">"OK"</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}).</span><span class="pln">data</span><span class="pun">(</span><span class="str">"kendoAlert"</span><span class="pun">).</span><span class="pln">open</span><span class="pun">();;</span><span class="pln">
</span><span class="tag">&lt;/script&gt;</span></code></pre>
		</article>
	</div>
</template>
