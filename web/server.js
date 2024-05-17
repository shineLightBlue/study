const fs = require('fs');
const { parseString } = require('xml2js');

// 读取位于根目录下的 file 目录中的 example.xml 文件
fs.readFile('file/70.xml', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错:', err);
    return;
  }

  // 使用 xml2js 的 parseString 函数解析 XML
  parseString(data, (err, result) => {
    if (err) {
      console.error('解析 XML 出错:', err);
    } else {
      // 解析完成后的结果在 result 中
      console.log('解析后的 XML:', result);
    //   console.log('解析后的 XML:', result.SCL.Header);
      console.log('解析后的 XML:', result.SCL.SendPacket[0].packet[0]);
    //   console.log('解析后的 XML:', result.SCL.Analysis);
    }
  });
});
