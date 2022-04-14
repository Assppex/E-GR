import * as FileSystem from 'expo-file-system'

class Emoji {
  constructor(unicode, weight, category, subcategory, id) {
      this.unicode = unicode;
      this.weight = weight;
      this.category = category;
      this.subcategory = subcategory;
      this.id = id;
  }
}

export async function readEmojis(path) {
    console.log(data);
    var res = [];
    var x = data.split('\n');
    for (var i = 0; i < x.length; i++) {
        var emojiData = x.split('\t');
        var emoji = Emoji(emojiData[1], emojiData[2], emojiData[3], emojiData[4], emojiData[5])
        res.push(emoji);
    }

    return res;
}

export function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                return allText;
            }
        }
    }
    rawFile.send(null);
}