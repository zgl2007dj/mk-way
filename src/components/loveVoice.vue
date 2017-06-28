<template>
  <div class="love-Voice">
    <h1>Love Voice</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
const changeWord = (oldStr, newStr) => {
  [...oldStr].reverse().forEach((letter, index) => {
    if (letter === newStr[index]) {

    }
  })
}
const loveVoices = [
  '我爱你', // 汉语 -->
  'I love you (爱老虎油)', // 英语 -->
  'Je t`aime,Je t`adore 惹带么＂', // 法语 -->
  'Ich liebe Dich (衣西里拔弟兮)', // 德语 -->
  'Minarakastan sinua (明那拉卡司谈洗奴娃)', // 芬兰 -->
  'IK hou van jou (阿荣吼范丸)', // 荷兰 -->
  'Miluji te (米卢急特)', // 捷克 -->
  'Jeg elsker dig (接个爱死替个)', // 丹麦 -->
  'chit pa de (起拍得)', // 缅甸 -->
  'あいしてる (阿姨兮带路)', // 日本 -->
  '사랑해 (3朗嗨哟)', // 韩语 -->
  'Ch`an Rak Khun (千软昆)', // 泰国 -->
  'Em ye`u anh (爱也有爱恩)', // 越南 -->
  'e`g elska tig (爱个爱二四卡题)', // 冰岛 -->
  'Jag lskar dig (道理4卡体格)', // 瑞典 -->
  'Ani ohev otach (啊你 偶和夫 偶踏西)', // 犹太语 -->
  'Szeretlek (赛来特可来)', // 匈牙利 -->
  'S`agapo (萨哈泼)', // 希腊语 -->
  'Tave Myliu (踏副米卢)', // 立陶宛 -->
  'Te sakam (特飒侃)', // 马其顿 -->
  'Inhobbok (音红博客)', // 马其他 -->
  'Kocham Cie (烤蛤蟆去)', // 波兰语 -->
  'Eu amo-te (哎呜啊木腿)', // 葡萄牙 -->
  'Ami tomay bhalobashi (阿米动嘛改挖哈喽瓦寺)', // 孟加拉 -->
  'Bong salang oun (波斯郎酒)', // 柬埔寨 -->
  'Mahal Kita (马哈吉他)', // 菲律宾 -->
  'saya Cinta Mu (洒呀新塔木)', // 马来语 -->
  'bi chamd hairtal (比掐木bomb还日抬)', // 蒙古语 -->
  'Tora dost daram (土司特大轮)', // 波斯语 -->
  'Я люблю тебя (鸭鸡不鸭留不留)　 ', // 俄罗斯 -->
  'Te amo,Tequiero (得阿摸)', // 西班牙 -->
  'Seni seviyorum (腮内腮围有润)', // 土耳其 -->
  'ja vas kokhaju (家白4哈有)', // 乌克兰 -->
  'Mina armastan sind (米那阿马斯叹赛)', // 爱沙尼亚 -->
  'ti amo (提阿么)', // 意大利语 -->
  'Es tevi Milu (一司特喂米卢)', // 拉托维亚 -->
  'Te lu besc,Te Ador (有背4克)', // 罗马尼亚 -->
  'Yes Kezi Seeroom yem (也可思西容颜)', // 亚美尼亚 -->
  'ahs te obicham (阿斯得袄比樵木)', // 保加利亚 -->
  'main tumse pyar karta hoon (慢色爹革了地后)', // 北印度语 -->
  'Ana Ahebak (女生对男生：不黑不开)', // 阿拉伯语 -->
  'Arabic Ana ahebek (男生对女生：无黑不可)', // 阿拉伯语 -->
  // 'Mein tumhay pyar kerti hun (女生对男生：没吞黑婆泪卡踢昏)', // 乌尔都语 -->
  'Mein tumhay pyar kerta hun (男生对女生：没吞黑婆泪卡它昏)', // 乌尔都语 -->
  'Nagligivaget (那个立即围鸡特)', // 爱斯基摩 -->
  'Volim Te (佛灵特)', // 塞尔维亚 -->
  'Saja kasih saudari (萨家卡寺和萨德瑞)', // 印度尼西亚 -->
  'T Dua Shume (得蛙问寻)', // 阿尔巴尼亚 -->
  'Ljubim te (求比恩特)', // 斯洛文尼亚 -->
  'kia hoahai (七呀后阿海)', // 新西兰毛里语-->
  'Tamil n`an unnaik kathalikkinren (踏觅2男有耐克卡后理客)', // 南亚米泰尔语-->
  'IK zie u graag (一客也有狼鸡)' // 比利时佛兰芒-->
]
export default {
  data () {
    return {
      index: 0,
      messages: loveVoices
    }
  },
  mounted () {
    this.carousel()
  },
  computed: {
    msg () {
      return this.messages[this.index]
    }
  },
  methods: {
    carousel () {
      setTimeout(() => {
        if (this.index === (this.messages.length - 1)) {
          this.index = 0
        } else {
          this.index++
        }
        this.carousel()
      }, 2000)
    }
  }
}
</script>
