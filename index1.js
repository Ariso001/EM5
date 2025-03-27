var storyContent = {"inkVersion":21,"root":[["^你在诊所病床上苏醒，遗忘了所有的记忆，不知道自己为什么来到这里。","\n","^眼前坐在轮椅上的老人说，这里是雅南，一个被血液诅咒的城镇。今晚是狩猎之夜，你是猎人，来这里寻找“苍白之血”。","\n","^他说，你要先接受雅南的血液，然后去狩猎。","\n","^你抬头，看到病床边的输液架上，悬挂着一个很大的血瓶，血瓶延伸出的输血管，早已插在手臂的血管之中。","\n","ev","str","^接受输血","/str","/ev",{"*":"0.c-0","flg":4},{"c-0":["\n","^你好像没有选择的余地。","\n","^于是你沉默地接受了输血，眼皮渐渐疲惫，逐渐昏睡过去。","\n","^视觉还未完全恢复，但耳朵已经听到了右侧怪异的响声，你努力偏了偏头，看到了那只从血泊里生出来的野兽。","\n","^那头野兽体型比熊还要大，它发出低吼声，伸着利爪缓缓爬向你的病床，可你的身体依旧无力。","\n","^要死了吗？","\n",["ev","str","^努力坐起来","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^继续躺着","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^你尝试坐起来，但用不了一点力气，看来只能躺着等死了。 ",{"->":"part3"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["\n","^你只能躺着等死了。 ",{"->":"part3"},"\n",{"->":"0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"part3":[["^意外的是，你没有死，在它差一点要触碰到你的时候，一团火在它身上燃烧起来，野兽就这样被烧死了。","\n","^过了一会儿，你终于有力气了。","\n","ev","str","^下床","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^你下了病床。","\n","^往外走去，你看到了堵在门口疯狂进食的庞大野兽。","\n","^必须要将野兽杀死。","\n",["ev","str","^空拳打死门口野兽","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^被门口野兽杀死","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^你虽然赤手空拳，但凭借闪避，一点一点耗死了野兽。","\n","^你突然感到一阵晕眩，晕了过去。你在一处荒废的教堂前醒来。 ",{"->":"part1"},"\n",{"#f":5}],"c-1":["\n","^你赤手空拳，找不到任何武器，不出意料，你被野兽杀死了。","\n","^不过意外的是，你没有真正死去，你在一处荒废的教堂前醒来。 ",{"->":"part1"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"part1":[["^意识逐渐复苏，视觉逐渐清晰，你终于看清了现在所在的环境。","\n","^圆月高悬，周围是无尽的云雾，数条直冲云霄的巨柱立于其间。","\n","^你从院子里捡到了一些陈旧的纸条，从上面记载的碎片化的信息中知晓，这里是——猎人的梦境。","\n","^庭院的大门紧锁，那条小路不知伸向何方。","\n","^通往建筑正门的路旁，有一个像是在沉睡的少女，倚靠在树丛，小径的另一侧是数座墓碑。","\n","ev","str","^触摸人偶","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^“喂——”，","\n","^你轻轻呼唤一声，没有反应。","\n","^你小心翼翼地靠近少女，触碰她的手，确发现触感冰凉，也不是人类肌肤的柔软，没有任何反应。","\n","^原来是个人偶。","\n",["ev","str","^触碰墓碑","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^你转身看着那些墓碑，墓碑上没有任何文字。","\n","^走到面前挨个触碰，只有右侧第四座墓碑有了反应。","\n","^这座墓碑浮现出了一行文字：“诊所一楼”，正是你醒来的地方。","\n","^这大概就是从这里出去的办法。","\n","^你收回手，看向教堂，门大开着，像是在欢迎某人一样。","\n",["ev","str","^走进教堂","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^你小心地走进教堂，发现里面空无一人。不过你找到了一把有些生锈的斧头，和一把枪，以及一个破旧的笔记本。","\n","^你戴上斧头和枪，把笔记本塞进了胸口。 ",{"->":"part2"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"part2":[["ev","str","^离开梦境","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^离开这里的方法你已知晓，你抚摸上墓碑上的那行文字，闭上眼睛放空意识。","\n","^你离开了梦境，回到诊所一楼。","\n","^那只野兽依然在那里。","\n","^你悄悄走到野兽身后，趁其不备，挥起斧头重重砍在野兽身上，第二斧下去，野兽便没了气息。","\n","^你继续前进，前面就是诊所的门了。","\n",["ev","str","^打开诊所大门","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^你来到了雅南中部。","\n","^（此处省略一段剧情）","\n",{"->":"part2.0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["^未完待续。","\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};