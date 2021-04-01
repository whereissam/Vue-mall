<template>
  <div class="wrapper" ref='wrapper'>Category
    <ul>
      <li>this is li1</li>
      <li>this is li2</li>
      <li>this is li3</li>
      <li>this is li4</li>
      <li>this is li5</li>
      <li>this is li6</li>
      <li>this is li7</li>
      <li>this is li8</li>
      <li>this is li9</li>
      <li>this is li10</li>
      <li>this is li11</li>
      <li>this is li12</li>
      <li>this is li13</li>
      <li>this is li14</li>
      <li>this is li15</li>
      <li>this is li16</li>
      <li>this is li17</li>
      <li>this is li18</li>
      <li>this is li19</li>
      <li>this is li20</li>
      <li>this is li21</li>
      <li>this is li22</li>
      <li>this is li23</li>
      <li>this is li24</li>
      <li>this is li25</li>
      <li>this is li26</li>
      <li>this is li27</li>
      <li>this is li28</li>
      <li>this is li29</li>
      <li>this is li30</li>
      <li>this is li31</li>
      <li>this is li32</li>
      <li>this is li33</li>
      <li>this is li34</li>
      <li>this is li35</li>
      <li>this is li36</li>
      <li>this is li37</li>
      <li>this is li38</li>
      <li>this is li39</li>
      <li>this is li40</li>
      <li>this is li41</li>
      <li>this is li42</li>
      <li>this is li43</li>
      <li>this is li44</li>
      <li>this is li45</li>
      <li>this is li46</li>
      <li>this is li47</li>
      <li>this is li48</li>
      <li>this is li49</li>
      <li>this is li50</li>
      <li>this is li51</li>
      <li>this is li52</li>
      <li>this is li53</li>
      <li>this is li54</li>
      <li>this is li55</li>
      <li>this is li56</li>
      <li>this is li57</li>
      <li>this is li58</li>
      <li>this is li59</li>
      <li>this is li60</li>
      <li>this is li61</li>
      <li>this is li62</li>
      <li>this is li63</li>
      <li>this is li64</li>
      <li>this is li65</li>
      <li>this is li66</li>
      <li>this is li67</li>
      <li>this is li68</li>
      <li>this is li69</li>
      <li>this is li70</li>
      <li>this is li71</li>
      <li>this is li72</li>
      <li>this is li73</li>
      <li>this is li74</li>
      <li>this is li75</li>
      <li>this is li76</li>
      <li>this is li77</li>
      <li>this is li78</li>
      <li>this is li79</li>
      <li>this is li80</li>
      <li>this is li81</li>
      <li>this is li82</li>
      <li>this is li83</li>
      <li>this is li84</li>
      <li>this is li85</li>
      <li>this is li86</li>
      <li>this is li87</li>
      <li>this is li88</li>
      <li>this is li89</li>
      <li>this is li90</li>
      <li>this is li91</li>
      <li>this is li92</li>
      <li>this is li93</li>
      <li>this is li94</li>
      <li>this is li95</li>
      <li>this is li96</li>
      <li>this is li97</li>
      <li>this is li98</li>
      <li>this is li99</li>
      <li>this is li100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "category",
  data(){
    return{
      scroll : null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3,
      pullUpLoad: true 
    })

    this.scroll.on('scroll', (position) => {
      console.log(position)
    })

    this.scroll.on('pullingUp', () => {
      console.log("Pull up and load more")
    })
  }
};
</script>

<style scoped>
.wrapper{
    height: 500px;
    background-color: red;
    overflow: hidden;
    /* overflow-y: scroll; */
}
</style>