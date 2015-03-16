RESTful plugin for js
-------------

#### Dependencies:
- JQuery

#### Usage:
``` html
<form class="restful" data-method="PUT" data-action="www.example.com/example">
  <input name="msg" value="Hello, world!">
  <button type="submit">Submit</button>
</form>
<script>
    restAPI.bindAll(function() {
        console.log('success');
    }, function() {
        console.log('error');
    });
</script>
```
Once the above form triggers submit event, then it will **PUT** the msg:"Hello, world!" to www.example.com/example
