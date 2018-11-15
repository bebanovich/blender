<script>var template = document.getElementById("templateId").innerHTML
var compiled = Handlebars.compile(template)
var info1 = {
    "id": 1,
    "name": "Remove Strings Arm",
    "specs": {
      "vid_id": "bUXSpZf1TTY",
      "shortcuts": "1", "2"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    "image": {
      "small": "/images/icons/icon-96x96.png",
      "large": "/images/icons/icon-512x512.png"
    }
  }
  document.getElementById("div1").innerHTML = compiled(info1)
  <script>
