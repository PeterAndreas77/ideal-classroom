<template src="./Home.html"></template>
<style src="./Home.css"></style>


<script>
export default {
  data: function() {
    return {
      slides: [
        {
          id: 1,
          title: "Grades",
          content: "Take control and keep track of your students' grades",
          icon: "grade"
        },
        {
          id: 2,
          title: "Schedule",
          content:
            "Create and follow your own schedule or import an existing one",
          icon: "schedule"
        },
        {
          id: 3,
          title: "Crafts",
          content: "Search pinterest or other sites for your favorite crafts",
          icon: "wallpaper"
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

