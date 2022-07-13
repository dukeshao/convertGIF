const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

const fileName = "4D7136CB-B63B-4862-90FC-F374E6B73FB5.MOV";
const resultName = "demo.gif";

(async () => {
    await ffmpeg.load();
    ffmpeg.FS('writeFile', fileName, await fetchFile(fileName));
    await ffmpeg.run('-i', fileName, resultName);
    await fs.promises.writeFile(resultName, ffmpeg.FS('readFile', resultName));
})()