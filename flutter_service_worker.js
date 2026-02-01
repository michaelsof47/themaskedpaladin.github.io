'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1a432a9e463d88090af75a3ae8398e2c",
"version.json": "26acc2ee6aaad5f19c0e46fa7dc46538",
"index.html": "f329f75be6a5e4bbd6591ea150b55eeb",
"/": "f329f75be6a5e4bbd6591ea150b55eeb",
"main.dart.js": "84fd2921a83fe18fb0e63aeddaa88a50",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "31046609ae933ff255a9cde360718432",
"icons/Icon-192.png": "f9f40b5dfce2e0ebc15ed36a32eabd87",
"icons/Icon-maskable-192.png": "f9f40b5dfce2e0ebc15ed36a32eabd87",
"icons/Icon-maskable-512.png": "bb57233228f0590316633bc1e7d98de6",
"icons/Icon-512.png": "bb57233228f0590316633bc1e7d98de6",
"manifest.json": "326f0485d6b5e23611c93818e001f78f",
"assets/AssetManifest.json": "a61dc4588f1d16b53450c44f6f8c3da4",
"assets/NOTICES": "9ee58f55be71932a954c4a22b5ab2e29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a8fd198a17693b2ae350f1f5f3e979d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "44cec1858b49b3acc7854e35255dcdc7",
"assets/fonts/MaterialIcons-Regular.otf": "294ed0a94663591f8c0530d4d194eb20",
"assets/assets/images/character_walk_right/0006.png": "98915238a66d649248fd2e4e22846efe",
"assets/assets/images/character_walk_right/0012.png": "b2322e4ddf04813fa8863e64eb5dfbe5",
"assets/assets/images/character_walk_right/0013.png": "5cb5da3826d24d243e446764273d8784",
"assets/assets/images/character_walk_right/0007.png": "8bc84db12fece18b7678f45c9b2d277c",
"assets/assets/images/character_walk_right/0011.png": "1bf1e12b5ff884b8d99087eb36414e47",
"assets/assets/images/character_walk_right/0005.png": "549ee570d5383944478a7439000347fa",
"assets/assets/images/character_walk_right/0004.png": "baa38bb51bcb0e1acd22a4cf91b83f9c",
"assets/assets/images/character_walk_right/0010.png": "f01fa8137a6e44b942119601c5c8b902",
"assets/assets/images/character_walk_right/0028.png": "8fcc3b3489f40020b9fe9003caaa047b",
"assets/assets/images/character_walk_right/0014.png": "7dd37ddb40d592d4ad85c28450443426",
"assets/assets/images/character_walk_right/0000.png": "f48c872ca066dc03eeadb8a986f1f21b",
"assets/assets/images/character_walk_right/0001.png": "7b5446250b7b6b8a73f49267ac611d17",
"assets/assets/images/character_walk_right/0015.png": "ba688c5c18fad24e6750882302eaaf32",
"assets/assets/images/character_walk_right/0029.png": "6df80f91892b12a0599c0394b200214b",
"assets/assets/images/character_walk_right/0003.png": "5507fc96bffdb2ecc3c314ba2a15ca81",
"assets/assets/images/character_walk_right/0017.png": "734cfb5e9f987bfaec3164bed87b585d",
"assets/assets/images/character_walk_right/0016.png": "1a968e61156b76b0b46c8cfcc9349bd6",
"assets/assets/images/character_walk_right/0002.png": "e3a46854d81e76e872ce4147fe5aa52d",
"assets/assets/images/character_walk_right/0027.png": "6fd581fbde156e6167a7f54fbf1481dd",
"assets/assets/images/character_walk_right/0033.png": "1412c1b3b79be8f9e694130ed979bf0c",
"assets/assets/images/character_walk_right/0032.png": "664cfce46a6c1e145324a223f3d4d58a",
"assets/assets/images/character_walk_right/0026.png": "d084fd7a7e75fbd0b70db4a34052d35b",
"assets/assets/images/character_walk_right/0030.png": "ed309f120157dab70706a40bec175e20",
"assets/assets/images/character_walk_right/0024.png": "a4e6160d5b9d1deb026b492f55b2e3dc",
"assets/assets/images/character_walk_right/0018.png": "a12269bac815dd57477ee6b18f74c98a",
"assets/assets/images/character_walk_right/0019.png": "d4217e76bbd644950ba2ccae2049261e",
"assets/assets/images/character_walk_right/0025.png": "9a76d6b489741f2bdacfe3afd0ca1e5d",
"assets/assets/images/character_walk_right/0031.png": "416662da5f428ce78c3c2da5346ebb15",
"assets/assets/images/character_walk_right/0009.png": "11a0a9962bcf7bdd86d183579e203932",
"assets/assets/images/character_walk_right/0021.png": "b42a65d0ebf115b0ed793e8d8f3b857f",
"assets/assets/images/character_walk_right/0020.png": "6d49d053de9d47e12c6544260f1c7706",
"assets/assets/images/character_walk_right/0034.png": "683756a81828a59f5837cb9e6afe687c",
"assets/assets/images/character_walk_right/0008.png": "97bbec6fc92c415c65d6e55377dbcc94",
"assets/assets/images/character_walk_right/0022.png": "603f5f4a40231d0353879365d9d5d1a4",
"assets/assets/images/character_walk_right/0023.png": "ce9b764afdf829b169d57022032b13a2",
"assets/assets/images/character_walk_left/0006.png": "3c09fb44ea8f2b7d6a14e2b1a281dbe8",
"assets/assets/images/character_walk_left/0012.png": "5153be594bf07de3e01f62d8ea7809b0",
"assets/assets/images/character_walk_left/0013.png": "7871452192a58eef81a7cd9a64124fde",
"assets/assets/images/character_walk_left/0007.png": "e86f7b02bdcc92161d4aa33ccb893964",
"assets/assets/images/character_walk_left/0011.png": "f3658866bd04d187e0ed988e5611a83f",
"assets/assets/images/character_walk_left/0005.png": "6375d1ba514aa77796ab2d1305e7241f",
"assets/assets/images/character_walk_left/0004.png": "7613b49f5f0a2abf03bf6476ab7f5f7e",
"assets/assets/images/character_walk_left/0010.png": "71427a677a53eb9b68c8471d2ae0630d",
"assets/assets/images/character_walk_left/0028.png": "9623adad23fae2ecd5855693a38bcbcf",
"assets/assets/images/character_walk_left/0014.png": "14a453caa2a25e3166bab1a43b006390",
"assets/assets/images/character_walk_left/0000.png": "f85114f3d1ca9ed43b8f9cc22690529c",
"assets/assets/images/character_walk_left/0001.png": "922a82dc4f9fec84b02f7c90cfbb278a",
"assets/assets/images/character_walk_left/0015.png": "75b22b0afaa3838aa9c287250abda929",
"assets/assets/images/character_walk_left/0029.png": "124beb8dd7a3de61103a02f727f07034",
"assets/assets/images/character_walk_left/0003.png": "5022ea5ed6a8b65f0ba03e28ceb108c8",
"assets/assets/images/character_walk_left/0017.png": "18df360575e9a6e24e6bc0d793a29e27",
"assets/assets/images/character_walk_left/0016.png": "a945d59be703adeae0f76022da4d0f3c",
"assets/assets/images/character_walk_left/0002.png": "c8ee5b6af21ae4afcce8497ae093dbba",
"assets/assets/images/character_walk_left/0027.png": "3e058b0e73807c12ad9dc641c95ed99d",
"assets/assets/images/character_walk_left/0033.png": "42eb4955f14ae438d2b50c9b96781b7f",
"assets/assets/images/character_walk_left/0032.png": "a850956d8b2a228f9bd54adce7910523",
"assets/assets/images/character_walk_left/0026.png": "c6d1e5932d0f367546d1c7994419fdd9",
"assets/assets/images/character_walk_left/0030.png": "47f0611e71ea29a2e868946e56b226b7",
"assets/assets/images/character_walk_left/0024.png": "88ef4edb56bd116e9ce551b86e083d2e",
"assets/assets/images/character_walk_left/0018.png": "0923ac81e865f2eb02d1731f783bf5b8",
"assets/assets/images/character_walk_left/0019.png": "32da69849dd438e5bc1de4c027987901",
"assets/assets/images/character_walk_left/0025.png": "6997d596bb3a7ac7a2886aa7639a17ae",
"assets/assets/images/character_walk_left/0031.png": "345aac291b41f1e9921d889fac63eaf8",
"assets/assets/images/character_walk_left/0009.png": "73516168d5dbe5bcc746c4ff108c053d",
"assets/assets/images/character_walk_left/0021.png": "e2a41c0df42c38ba2c1453716043d9cb",
"assets/assets/images/character_walk_left/0020.png": "740d7a5313e4644becabae8e1111e8f5",
"assets/assets/images/character_walk_left/0034.png": "2b7abd8dfccec5ab19b73916e34c230c",
"assets/assets/images/character_walk_left/0008.png": "8412c1a98ae928a7c5129c3f37bdbce0",
"assets/assets/images/character_walk_left/0022.png": "b1080c20235d8bb7035d764f162cddcc",
"assets/assets/images/character_walk_left/0023.png": "c1c4ed383f7d52414f133dac324add9d",
"assets/assets/images/dark.png": "47e339d9f3c597ce6a77809c84326b50",
"assets/assets/images/enemy_walk/0006.png": "0fd29e5ba36ac5eb2fea699edb35c36c",
"assets/assets/images/enemy_walk/0012.png": "c2a146a5e9c0db03804323b757e38e27",
"assets/assets/images/enemy_walk/0013.png": "1ed44543d9a8099329189326a28ebc94",
"assets/assets/images/enemy_walk/0007.png": "61d60aaab354d0d39f23439a4ad16a7f",
"assets/assets/images/enemy_walk/0011.png": "6687f668005f9bfb6ea512c774b2db0d",
"assets/assets/images/enemy_walk/0005.png": "ef80642b66f4452542b28fd99b2eab64",
"assets/assets/images/enemy_walk/0004.png": "1ff6699b22241b8d481d09961c22472e",
"assets/assets/images/enemy_walk/0010.png": "f5ba5d236b031d5b69ae25cb02ea7d3a",
"assets/assets/images/enemy_walk/0028.png": "4d34becd73fe2056b7ea71358e3c400f",
"assets/assets/images/enemy_walk/0014.png": "bd75e974a52227c73b6e4a3a0e541f69",
"assets/assets/images/enemy_walk/0000.png": "39308dfc726b46c17cee4139db93abd2",
"assets/assets/images/enemy_walk/0001.png": "d82e33515d96c8b480ed64e283a166a4",
"assets/assets/images/enemy_walk/0015.png": "215d45cbf60a7e6a969ad572033ee3d2",
"assets/assets/images/enemy_walk/0029.png": "35b4b33fe49dcf049ac582ba3146e4f8",
"assets/assets/images/enemy_walk/0003.png": "6c11764fd7e129d808fc184c4773a8f0",
"assets/assets/images/enemy_walk/0017.png": "8f72a1b230537765a39cb8768dbdf884",
"assets/assets/images/enemy_walk/0016.png": "9a0351e5ba3377664343536b3bc833c0",
"assets/assets/images/enemy_walk/0002.png": "bb57e0e54f54a7d902a848cd7f56cfdd",
"assets/assets/images/enemy_walk/0027.png": "468e4d52112abe35f2dbab4620ad26f3",
"assets/assets/images/enemy_walk/0033.png": "4f60b9d386b39400146b7969fdbf1de0",
"assets/assets/images/enemy_walk/0032.png": "373324cbdeef2b6858d8d5bf66fbf42d",
"assets/assets/images/enemy_walk/0026.png": "dbff74c9aa123170c7984d4068bd0420",
"assets/assets/images/enemy_walk/0030.png": "18247c70d6e341432dfb60969255c7a3",
"assets/assets/images/enemy_walk/0024.png": "a3b1262b55c8807a0b03b82d2f9bdde1",
"assets/assets/images/enemy_walk/0018.png": "619df83222b6c08a1898de848f65325a",
"assets/assets/images/enemy_walk/0019.png": "06d60625c357522bf76dffebe5f8d894",
"assets/assets/images/enemy_walk/0025.png": "94b30f0c86a1c8ee0f8e77dfdceae9a5",
"assets/assets/images/enemy_walk/0031.png": "802d35536fa980781a4e0510d694e678",
"assets/assets/images/enemy_walk/0009.png": "b9bc1ddc976a6c51053115fd149c76f7",
"assets/assets/images/enemy_walk/0035.png": "2c4f9314f515a5807068666bff4d3009",
"assets/assets/images/enemy_walk/0021.png": "e18bb2ec2acce04bb7d431679686bd96",
"assets/assets/images/enemy_walk/0020.png": "adcf15fb0a6de9cc0d54bdbd9126ae1c",
"assets/assets/images/enemy_walk/0034.png": "3ac8b83eaafbbbd3f36eb3053da1a6e9",
"assets/assets/images/enemy_walk/0008.png": "59d80c075de37067ea64a14b6ed2ffda",
"assets/assets/images/enemy_walk/0022.png": "bd04a854ffce126a14e980f8567896e4",
"assets/assets/images/enemy_walk/0036.png": "95c9ab9573f0fed0765dafb15c9948b8",
"assets/assets/images/enemy_walk/0023.png": "b528419216be1eb3233c339850da6616",
"assets/assets/images/icon_logo.jpg": "a88ec7d4cc4252e3c6c4edf280eee509",
"assets/assets/images/win.png": "c4eccce38ae7f7015167a0ad3386b564",
"assets/assets/images/map_new.png": "32fba9a14b9858f1efa5a7990f220a31",
"assets/assets/images/character_walk/0006.png": "2b065019fd430826a6bb21e11646745f",
"assets/assets/images/character_walk/0012.png": "f4c1512ee4b1c573b30d50f7fbf2d9ba",
"assets/assets/images/character_walk/0013.png": "ad42a0e67e12d679e10ec245257663f4",
"assets/assets/images/character_walk/0007.png": "3b4901cadbb82baff8169cf2eabe0d72",
"assets/assets/images/character_walk/0011.png": "1e1c3d397216113f6319d7c2773ba56f",
"assets/assets/images/character_walk/0005.png": "53acccc8f7a7e786f4820242fbe078b2",
"assets/assets/images/character_walk/0004.png": "a544159e5c8ef67ff5a678a3c75014f2",
"assets/assets/images/character_walk/0010.png": "a1784fbbd81a4d75436e35654522d577",
"assets/assets/images/character_walk/0028.png": "5dba4df6b2f7d185c1ef55a4796473f9",
"assets/assets/images/character_walk/0014.png": "3e0d429e28fe30ac40cee6649abfdcdf",
"assets/assets/images/character_walk/0000.png": "78ec93c97310a0b8494c5d49f3a6a879",
"assets/assets/images/character_walk/0001.png": "b9f9807f65e551d5045fe53feaa0fde2",
"assets/assets/images/character_walk/0015.png": "28e76f9b9c26bfff5625b2c80c9ac48e",
"assets/assets/images/character_walk/0029.png": "03de12933553e8f83f01a030ede728b2",
"assets/assets/images/character_walk/0003.png": "75fb49c2c298e653f9d2ae9a34ea3214",
"assets/assets/images/character_walk/0017.png": "d21df6d8d67bf05a971bb9cac6586fd4",
"assets/assets/images/character_walk/0016.png": "1ef5ea48119daa36396fe42c90aaf6de",
"assets/assets/images/character_walk/0002.png": "61b2ad9d7376c91fdb369ce525ef0532",
"assets/assets/images/character_walk/0027.png": "2028431ece5e2a34fa8122d781ef0f38",
"assets/assets/images/character_walk/0033.png": "14891d0e0fdc21ba6a4690d7aa7c8909",
"assets/assets/images/character_walk/0032.png": "a406c83cfc8847e98bb85001d3b9fb6a",
"assets/assets/images/character_walk/0026.png": "7fbc61bfcd9e8891ef5cf0e79672b352",
"assets/assets/images/character_walk/0030.png": "1ebb6ad6fad0b2b5fcd23180dee3843c",
"assets/assets/images/character_walk/0024.png": "240364fc1cbdbe62f79497217da5e68f",
"assets/assets/images/character_walk/0018.png": "6fbc3ce7fe866c5abfe959dae559fe95",
"assets/assets/images/character_walk/0019.png": "6ce09ade343f33258f7bd52b12ea2316",
"assets/assets/images/character_walk/0025.png": "c4759863c096325cd17f22daf0d77952",
"assets/assets/images/character_walk/0031.png": "fadfed1f85038e0b977e37b0fe40de81",
"assets/assets/images/character_walk/0009.png": "e3befc9a539cbbf09840b20383b1c917",
"assets/assets/images/character_walk/0021.png": "c03f4fada2fddff4836cd560dc27a052",
"assets/assets/images/character_walk/0020.png": "e18ed4e1d4bf3156f49390a74c24b5a5",
"assets/assets/images/character_walk/0034.png": "6e86cef3104a0c0dac753f82e594e6b9",
"assets/assets/images/character_walk/0008.png": "b0e5b70b4fe3650d1128563e2d4e0a89",
"assets/assets/images/character_walk/0022.png": "5f853af4ba54b65784b541223a87696d",
"assets/assets/images/character_walk/0023.png": "460f22a841e64f52c033127fd5118159",
"assets/assets/images/character_walk_top/0006.png": "6346b35296ef4ba565a26efbe925f43e",
"assets/assets/images/character_walk_top/0012.png": "e8a924e8d7b27e0d4dba1849c71170bf",
"assets/assets/images/character_walk_top/0013.png": "5477cd358aa761b48b424016a7fad842",
"assets/assets/images/character_walk_top/0007.png": "d909a22df993954f696d541339651a9c",
"assets/assets/images/character_walk_top/0011.png": "a09be57270e141c352f2964d211af02d",
"assets/assets/images/character_walk_top/0005.png": "663014f008723cd3b8b869d1d7f917b1",
"assets/assets/images/character_walk_top/0004.png": "a418ff3828d286f52fc593bac1359848",
"assets/assets/images/character_walk_top/0010.png": "fdeacba76d68c63c12b6117c41e21d0e",
"assets/assets/images/character_walk_top/0028.png": "95aa934d0106a53572db46a627554030",
"assets/assets/images/character_walk_top/0014.png": "e7f02deb8795f291b932bb498030fe45",
"assets/assets/images/character_walk_top/0000.png": "1215b62ff639a72a7fe9aa640f633fe6",
"assets/assets/images/character_walk_top/0001.png": "638b11b43be70d99657fef8f6058e3d6",
"assets/assets/images/character_walk_top/0015.png": "a5a073be1353e4c48c25072034d51186",
"assets/assets/images/character_walk_top/0029.png": "998c2eb66463f75ea710c5b9d45ce63b",
"assets/assets/images/character_walk_top/0003.png": "a1620286a335f6dfc71a9239b90b175e",
"assets/assets/images/character_walk_top/0017.png": "16b0425d78a425eb7f9219f8084d5241",
"assets/assets/images/character_walk_top/0016.png": "2367e548c6602cd81b99f24924c96fa7",
"assets/assets/images/character_walk_top/0002.png": "9e39d58c431203e05dd47d8347ecea47",
"assets/assets/images/character_walk_top/0027.png": "f52b92eec768850225098f02ac32047b",
"assets/assets/images/character_walk_top/0033.png": "a47783e4ae8a341b31854b55aa2276d6",
"assets/assets/images/character_walk_top/0032.png": "73d002a495fcdb83c512e40b1dca53c6",
"assets/assets/images/character_walk_top/0026.png": "692af8e8e542d8f5cf0f42f2983844e4",
"assets/assets/images/character_walk_top/0030.png": "bdd5547733c945c366956c32235d2ca6",
"assets/assets/images/character_walk_top/0024.png": "f1fb5acf288b6640d525717f3b316f53",
"assets/assets/images/character_walk_top/0018.png": "0ed4a412c34c249b98a1a50a4efc059a",
"assets/assets/images/character_walk_top/0019.png": "eedd32ab7ca6e6300adc239b460d02c6",
"assets/assets/images/character_walk_top/0025.png": "940cdb2b60dd85a305b2304a2c85bf42",
"assets/assets/images/character_walk_top/0031.png": "aac628847779dbe5b87d62a9ab3c4cc1",
"assets/assets/images/character_walk_top/0009.png": "1b99684beadd294f9707f5efafe2dce7",
"assets/assets/images/character_walk_top/0021.png": "1202f706e6a7bfe08577a622debcfd2a",
"assets/assets/images/character_walk_top/0020.png": "52a6377a53cc876e6a487cfadfa44a26",
"assets/assets/images/character_walk_top/0034.png": "b6e8b96169b9823084db2fdc769c75b7",
"assets/assets/images/character_walk_top/0008.png": "4873419d90e1296dbdb381159a6d3f70",
"assets/assets/images/character_walk_top/0022.png": "e90afd1d4495e5aae99576051b0a7030",
"assets/assets/images/character_walk_top/0023.png": "36cc4db6562ab715b7e6d77d53ba09df",
"assets/assets/images/character_idle/0006.png": "a283aa39cc7f253c64f4def9eae4dbc8",
"assets/assets/images/character_idle/0012.png": "33afd85aca91b718c720ed66efd6f26d",
"assets/assets/images/character_idle/0013.png": "86cd2bfea2e73eda825139166a625425",
"assets/assets/images/character_idle/0007.png": "8870ab44d46c96a7f9e66e8b4953ccdb",
"assets/assets/images/character_idle/0011.png": "b662f2efe42a026cc7ae26f5dca4e823",
"assets/assets/images/character_idle/0005.png": "ba4bb8c943e80bac76e98bc8afcb1594",
"assets/assets/images/character_idle/0039.png": "b83e4d5a83cd8a932b18c2c2f3b3e23b",
"assets/assets/images/character_idle/0038.png": "604f6e877a15457f652485860424dd91",
"assets/assets/images/character_idle/0004.png": "75f9633f018ec1ccfae9a1a644fa4f9c",
"assets/assets/images/character_idle/0010.png": "5c5db001460e554b2c73d051810eb7b3",
"assets/assets/images/character_idle/0028.png": "58faf3e5d235141223d10c70952da47d",
"assets/assets/images/character_idle/0014.png": "a176c07533b104c3362a96bdbd5a310a",
"assets/assets/images/character_idle/0000.png": "c031ba22fd0c8801637eb3348d85f999",
"assets/assets/images/character_idle/0001.png": "2f6b299adc91f53d35e003d6e947f017",
"assets/assets/images/character_idle/0015.png": "cc5d260ee6d90058c4eca94f02d0c4f4",
"assets/assets/images/character_idle/0029.png": "24709c8cd1e8e71115ac9513e57d3496",
"assets/assets/images/character_idle/0003.png": "13ec1a1bce7f120560a96a372673eaa6",
"assets/assets/images/character_idle/0017.png": "056869a729102bff824d95f6215d5a3d",
"assets/assets/images/character_idle/0016.png": "63fdeade899fa88f9112ab34aeb7df48",
"assets/assets/images/character_idle/0002.png": "93e2dc4db7399d5efbc3424ad5e701e9",
"assets/assets/images/character_idle/0027.png": "f5d9a30e612462794279dd62c9e735cc",
"assets/assets/images/character_idle/0033.png": "7486cf1c9a92d01a7f4546f87d033fe1",
"assets/assets/images/character_idle/0032.png": "3d78fa0b7228ef9cd7068c33334f4cee",
"assets/assets/images/character_idle/0026.png": "f46db6e77f2f54732c1af780eed24fab",
"assets/assets/images/character_idle/0030.png": "c2001e146e284c0f0e747fa9c58e2673",
"assets/assets/images/character_idle/0024.png": "f97d533c6f7b70508bd8ecc8aada89fa",
"assets/assets/images/character_idle/0018.png": "8f4a323cc32ae31f7c98807cd0e588be",
"assets/assets/images/character_idle/0019.png": "e1ea129b928b6de01e9d25cf0422b4e7",
"assets/assets/images/character_idle/0025.png": "51f3cfbd16c2f770719b4bbbde437111",
"assets/assets/images/character_idle/0031.png": "b7e5fbc3dcfd91d966d9ee5765aef4dd",
"assets/assets/images/character_idle/0009.png": "eb2c16c1c1a2d95d15033f9e68a8e8f8",
"assets/assets/images/character_idle/0035.png": "11e4e5d4144bf70f3d566cf378e2f591",
"assets/assets/images/character_idle/0021.png": "3d8b679f15163b8f7a1608ff9a6f85c5",
"assets/assets/images/character_idle/0020.png": "84e4231abcb0850c9c0b2e5044c0ed35",
"assets/assets/images/character_idle/0034.png": "8b9baabe24ceb55f5e9997ff21eb3472",
"assets/assets/images/character_idle/0008.png": "8be145346bd30bdc8c9eef592a5a7085",
"assets/assets/images/character_idle/0022.png": "77b73012fe2d730bc4d50b7fcdcf3be1",
"assets/assets/images/character_idle/0036.png": "e1153f9e1b7a704ab12d980955ad1d30",
"assets/assets/images/character_idle/0037.png": "2faf36375fcb9ba549d27c7f0bcb3ede",
"assets/assets/images/character_idle/0023.png": "6c8639e60b486ed4800ef8afd683e287",
"assets/assets/images/character_idle/0044.png": "f04be6d892c08b122c356f437ea1d4a9",
"assets/assets/images/character_idle/0045.png": "e85d1b35be8aeeeda1d44f24fc4d2349",
"assets/assets/images/character_idle/0046.png": "0676d9225b8646895d22e4daedeff450",
"assets/assets/images/character_idle/0042.png": "86206a499a0730ca5d737dd0fedc8929",
"assets/assets/images/character_idle/0043.png": "2baa709da908fccef1b71a6d9f8355af",
"assets/assets/images/character_idle/0041.png": "30f1191d6a9210a25f60649068f93225",
"assets/assets/images/character_idle/0040.png": "0fc54d573f48f096d2badec014f4027f",
"assets/assets/images/character_dead/0065.png": "bc2bbbbcbe8126e43d70a454bbda315c",
"assets/assets/images/character_dead/0071.png": "125996e09e801e6d0b35e54ec62b2f4e",
"assets/assets/images/character_dead/0059.png": "ecca447ac9461451c56cab33b11c7c5b",
"assets/assets/images/character_dead/0058.png": "2e33ed2d900ab77cbcd2ea9d8bd1d0d9",
"assets/assets/images/character_dead/0070.png": "eddc311e9437900cc91da319afcfb75d",
"assets/assets/images/character_dead/0064.png": "1c990b38254be071a28f7984550c8bb9",
"assets/assets/images/character_dead/0099.png": "25c7700afc8eda8699091ad8e800734c",
"assets/assets/images/character_dead/0072.png": "cabf7adf6dd9e60674c735d3ff173744",
"assets/assets/images/character_dead/0066.png": "ad81efd119cf3ef16fc49b3cddb8c430",
"assets/assets/images/character_dead/0067.png": "6add78d70c8a6802be728a242d9cf3fd",
"assets/assets/images/character_dead/0073.png": "ad265f5d30a24e39b20081dc29d5ad8c",
"assets/assets/images/character_dead/0098.png": "baa6ab0b977e17f5efb9fd096d7e5b0d",
"assets/assets/images/character_dead/0088.png": "4bc2b5b83652ddbea675a2b64ec0a83d",
"assets/assets/images/character_dead/0077.png": "36fb8b076eeb94472c10489edc2d0747",
"assets/assets/images/character_dead/0063.png": "969899ca69f9adc4bc5c4d461add99f9",
"assets/assets/images/character_dead/0062.png": "e35b6c7cec6503300cbfada83c00cb68",
"assets/assets/images/character_dead/0076.png": "6cf70eeea63c017a312da6bbdb2a8cbe",
"assets/assets/images/character_dead/0089.png": "d249cc5a2e537307c83fd6775db47dba",
"assets/assets/images/character_dead/0048.png": "0591f8bb0a204c7fd56ddd8e3202b439",
"assets/assets/images/character_dead/0060.png": "4fd3e26e6ce031ab3a6b26a1bebc7219",
"assets/assets/images/character_dead/0074.png": "6d48017c01ae18a05321e172d557dc70",
"assets/assets/images/character_dead/0100.png": "8ca35b47228e0bd4d89affedba851ef1",
"assets/assets/images/character_dead/0075.png": "bcdf85f906ec91848bf4730c92f89574",
"assets/assets/images/character_dead/0061.png": "8b929c61923200ab6c968325f6b4a291",
"assets/assets/images/character_dead/0049.png": "6d5c96e83a2a496ca947e4bc500f4cab",
"assets/assets/images/character_dead/0006.png": "d870d9c8c4d9b70d4f916b61ffb1b588",
"assets/assets/images/character_dead/0012.png": "a2b84dc3af603a23aba588bf78da9d5f",
"assets/assets/images/character_dead/0013.png": "266053c37517c8b8a37eebda28f2e0b2",
"assets/assets/images/character_dead/0007.png": "32b074f1170f458cf743516aa0eeb0ea",
"assets/assets/images/character_dead/0011.png": "7c585ff09b4680d1d884c724fa0a2bc5",
"assets/assets/images/character_dead/0005.png": "92d6f7743626edea53f5c9bc533fe179",
"assets/assets/images/character_dead/0039.png": "deea3e3bdc135c44395ac32f76bddd22",
"assets/assets/images/character_dead/0038.png": "660c9c9e2da6014dfad87d0f33abcfc8",
"assets/assets/images/character_dead/0004.png": "02dfbe7c605688ab2e3d23165bdbdacc",
"assets/assets/images/character_dead/0010.png": "cce137df8e743b93af611c12bd06e842",
"assets/assets/images/character_dead/0028.png": "b23ad785a8c4dcc0d18b7480160e4566",
"assets/assets/images/character_dead/0014.png": "66083c7769148880bdcb771c604713a9",
"assets/assets/images/character_dead/0000.png": "becf33b643082e33032fb1ea5c5cd44a",
"assets/assets/images/character_dead/0001.png": "9ef388fe5e01de07ce4f5a86a536791a",
"assets/assets/images/character_dead/0015.png": "1646469a59c668faa0d949d5c75a9952",
"assets/assets/images/character_dead/0029.png": "84ee52af2bf29e5694ac609c90ceedcd",
"assets/assets/images/character_dead/0003.png": "f0746bef93767660c8222c70be28a8ad",
"assets/assets/images/character_dead/0017.png": "11c134332e306034137612cb9ed0e060",
"assets/assets/images/character_dead/0016.png": "43d60fea2a5963fa8344e35283e63922",
"assets/assets/images/character_dead/0002.png": "f120c2a6b5a91d4f7e51c43434a36578",
"assets/assets/images/character_dead/0027.png": "2afa60dc51430ec60aaf1b5a77cd8df1",
"assets/assets/images/character_dead/0033.png": "5e3e6b37f416fbde894d48f44f2c7e26",
"assets/assets/images/character_dead/0032.png": "2526743dffe5a7a748d67c530804275f",
"assets/assets/images/character_dead/0026.png": "8f366862112c97e164b24a47005aebb5",
"assets/assets/images/character_dead/0030.png": "023d9cf90fee04da2c10b8eb50aec3f7",
"assets/assets/images/character_dead/0024.png": "d752be0a3de4844264fac4f9faf740e4",
"assets/assets/images/character_dead/0018.png": "2cb07823f801a9e73520eb4890876236",
"assets/assets/images/character_dead/0019.png": "3998cf2838693825e3c8b15ca079ea42",
"assets/assets/images/character_dead/0025.png": "812625d89ad61ec7b23a9fa9854f4720",
"assets/assets/images/character_dead/0031.png": "3295d6535d6f14fcb1bd69afc34a338e",
"assets/assets/images/character_dead/0009.png": "06cd992160ae563fbd67756085e5f204",
"assets/assets/images/character_dead/0035.png": "59cf6f0a8eaf3f0cb514fbedcf952c51",
"assets/assets/images/character_dead/0021.png": "fa5dd4f04e64805ecc5107e61cd5622b",
"assets/assets/images/character_dead/0020.png": "a936064430a905165cdf4478be3beb0a",
"assets/assets/images/character_dead/0034.png": "5836a8443967fbe05f7060d626b84c3b",
"assets/assets/images/character_dead/0008.png": "54d0870ec503e728e84cf2923a66066d",
"assets/assets/images/character_dead/0022.png": "12c3b9256c32e1d3dd14e6c7421124ad",
"assets/assets/images/character_dead/0036.png": "cac7e6c90a5b0613bab744d633ea27e3",
"assets/assets/images/character_dead/0037.png": "07dc23c30c39486c4eaa58b8eb869e20",
"assets/assets/images/character_dead/0023.png": "e7742ce958d27e011c5b7ad2f030bf10",
"assets/assets/images/character_dead/0087.png": "467b6214a5e68c8a30d407df5b0a1f47",
"assets/assets/images/character_dead/0093.png": "4006960fc44099460fb9ff3e1ce5d26c",
"assets/assets/images/character_dead/0044.png": "7fe2a435a842dfdaeaec8fee4de105ad",
"assets/assets/images/character_dead/0050.png": "832f38f2b9b38cae99d5d62ff0b46598",
"assets/assets/images/character_dead/0078.png": "74c4005e077441874bdff10909fc1e74",
"assets/assets/images/character_dead/0079.png": "0640660f53281fe06c450f4369d7413e",
"assets/assets/images/character_dead/0051.png": "b6060b676d3cbae5213e1209f3d63bc9",
"assets/assets/images/character_dead/0045.png": "96c66db9beca359350ca15b5f35943cb",
"assets/assets/images/character_dead/0092.png": "53bfd90b73e2917b9e1ca9d5630fc560",
"assets/assets/images/character_dead/0086.png": "e5ec76f0ede6671e2e0c8eae60036fff",
"assets/assets/images/character_dead/0090.png": "d6bae1435369732baba43ad6ade40df2",
"assets/assets/images/character_dead/0084.png": "d54d14890b9c248870091f7fa806d061",
"assets/assets/images/character_dead/0053.png": "182d7eb2b5774c34bebb7c061ee2c2b1",
"assets/assets/images/character_dead/0047.png": "143b0f860840cc148895f0c4bb94ff8a",
"assets/assets/images/character_dead/0046.png": "11105dc2cd3c6e89af9c83c8793a0807",
"assets/assets/images/character_dead/0052.png": "c3181877c058e5af35858c16321dbda4",
"assets/assets/images/character_dead/0085.png": "2f6da25a8686ca948e04d7229915ba47",
"assets/assets/images/character_dead/0091.png": "134a40f613037651f3271da43153b4df",
"assets/assets/images/character_dead/0095.png": "3b739f95f2295310763185461a6cdd22",
"assets/assets/images/character_dead/0081.png": "b91575d975b4ad89553fd28f7ecf3e92",
"assets/assets/images/character_dead/0056.png": "5324ddc03693d91c37c2067074eda517",
"assets/assets/images/character_dead/0042.png": "1b460b8393a85d7d82ec7fccb5ee0305",
"assets/assets/images/character_dead/0043.png": "e5886043cb01751ce2afb54fa4a89e25",
"assets/assets/images/character_dead/0057.png": "8924c32d6853ab08b7837b6e60448595",
"assets/assets/images/character_dead/0080.png": "f63014619d4844b6a50cc100856fef90",
"assets/assets/images/character_dead/0094.png": "6476c30a7c58d42019436505518b4834",
"assets/assets/images/character_dead/0082.png": "9f89fe3a616b3b17f09e16bf84310f5d",
"assets/assets/images/character_dead/0096.png": "c03ca2e13f3dfc5328648ac850921e23",
"assets/assets/images/character_dead/0069.png": "7e20e24e13eeb4ff95ba772056c297b3",
"assets/assets/images/character_dead/0041.png": "c097f4377386ce2a8565ad7cf04469ea",
"assets/assets/images/character_dead/0055.png": "f0836ba9f957b9c28d26fc2f33b13b21",
"assets/assets/images/character_dead/0054.png": "74be7f4f3c5f36c17815752ae8f8636b",
"assets/assets/images/character_dead/0040.png": "c7356bbe065c24673985f3d874b7d980",
"assets/assets/images/character_dead/0068.png": "9145722a626e0d402621019d4d856fce",
"assets/assets/images/character_dead/0097.png": "bda5b77c977ce2a165ad7ab6a0a87fbb",
"assets/assets/images/character_dead/0083.png": "2f2b0663d8665bbf1c7baaf5b0408c37",
"assets/assets/images/LOGO.png": "1c856906d2cdd7be366d0bc1b1fa9dba",
"assets/assets/images/Karpet.png": "127d99970bfaf55d3443bebb1d43d719",
"assets/assets/images/kotakcerita.png": "691cbdfa10167de9c56ad6e0ea371a4c",
"assets/assets/images/Light%2520Fantasy%2520Background.png": "ed2040ab23cd9f7b732f5157cd0ed25b",
"assets/assets/images/enemy_walk_top/0006.png": "17d48c89ac7527f9efbecd9f412d9788",
"assets/assets/images/enemy_walk_top/0012.png": "1209ec8558f265a00603578ab60d0c90",
"assets/assets/images/enemy_walk_top/0013.png": "b3425ec1b1eea1fa9ffa3dfeba1757f2",
"assets/assets/images/enemy_walk_top/0007.png": "ebcf276554dd21ba6caafa3dd07af901",
"assets/assets/images/enemy_walk_top/0011.png": "23666638473d52c4fa03aca7e1822c1e",
"assets/assets/images/enemy_walk_top/0005.png": "2d8958f3cd2a81aff83ed5e90b8c7182",
"assets/assets/images/enemy_walk_top/0004.png": "01d0f7bdafade109f002abe9b6ab31a4",
"assets/assets/images/enemy_walk_top/0010.png": "1cf28d0c8d140e83e5c49d4d04945c6b",
"assets/assets/images/enemy_walk_top/0028.png": "912dd56e4691fe05005244ca044d30da",
"assets/assets/images/enemy_walk_top/0014.png": "f72edb957928b3ce80ca50946d9c4957",
"assets/assets/images/enemy_walk_top/0000.png": "4c9df3b3191cb7c2758e489bd6b257da",
"assets/assets/images/enemy_walk_top/0001.png": "ea2ed262ce135f5826cdc4cb20f3ae47",
"assets/assets/images/enemy_walk_top/0015.png": "7637d4ebd932f972b67df3231a5d35e8",
"assets/assets/images/enemy_walk_top/0029.png": "b89485ff7d4f8db2c16ab2c6d954607a",
"assets/assets/images/enemy_walk_top/0003.png": "12892740f6e05dae84447486e8979c11",
"assets/assets/images/enemy_walk_top/0017.png": "0974c542955ead645ebae73c0d916044",
"assets/assets/images/enemy_walk_top/0016.png": "ef559fca9932803f3342eb9ac9616a49",
"assets/assets/images/enemy_walk_top/0002.png": "cef92fe5e8f036a8e68ad223775e2d29",
"assets/assets/images/enemy_walk_top/0027.png": "9b328e09f84e87a1ea141c27548076b7",
"assets/assets/images/enemy_walk_top/0033.png": "d75ace1c8d02349054861f7e9ae522bc",
"assets/assets/images/enemy_walk_top/0032.png": "27763a56568477331c526ce080f65d83",
"assets/assets/images/enemy_walk_top/0026.png": "6f0f98a81408c333650e42e2efc6f4b8",
"assets/assets/images/enemy_walk_top/0030.png": "00e08b8552bf46a89b6475f44dd4afae",
"assets/assets/images/enemy_walk_top/0024.png": "8723318f747ebd621f640ef3e1c993d6",
"assets/assets/images/enemy_walk_top/0018.png": "73229ef79484cddb75743f4cea91d677",
"assets/assets/images/enemy_walk_top/0019.png": "5acbef3a2e634167cdbd3e6018e013b8",
"assets/assets/images/enemy_walk_top/0025.png": "6b3df0e4ee5f3d34f58065c5b8ce39ef",
"assets/assets/images/enemy_walk_top/0031.png": "72212de52766bcb6ebbae1079bfb8465",
"assets/assets/images/enemy_walk_top/0009.png": "9413b9025ca6364a8a5898618f058f45",
"assets/assets/images/enemy_walk_top/0035.png": "e0024bee75711ac92c6986b18d05839c",
"assets/assets/images/enemy_walk_top/0021.png": "6bd6a9a877273aca367ce2dfc0d4c74c",
"assets/assets/images/enemy_walk_top/0020.png": "f110f9951816f765cde927aaed721bf8",
"assets/assets/images/enemy_walk_top/0034.png": "4641417b5b8d708b3ab664b41f18da3e",
"assets/assets/images/enemy_walk_top/0008.png": "52ad3815a359cfcae2d2a5bac39b78c4",
"assets/assets/images/enemy_walk_top/0022.png": "29f989b29f939c50fa7058a7462935f0",
"assets/assets/images/enemy_walk_top/0036.png": "cc9186e04643ca78a99d80fb75213a1a",
"assets/assets/images/enemy_walk_top/0023.png": "2be610e109b174d372b0054176407e62",
"assets/assets/images/mask.png": "cdca48805975a5945f2ce4f844f1e860",
"assets/assets/images/BG.png": "75c976bdb56083dfb7f5048686e89ecd",
"assets/assets/sounds/main_menu.mp3": "93d6c691b5033b0cbf475c0d9e16fd75",
"assets/assets/sounds/ingame.mp3": "6b7fa0a649b88d5582b583bf8652429f",
"assets/assets/lottie/mainmenu.json": "5a2306092c674f6c9d5c57f29756b3f4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
