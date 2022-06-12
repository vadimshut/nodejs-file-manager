import { createBrotliCompress, createBrotliDecompress} from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'
import { promisify } from 'util'



export const compressDecompressFile = async (input, output, method=true) => {
    const gzExt = ".br";

  const pipe = promisify(pipeline)
  const gzip = method ? createBrotliCompress() : createBrotliDecompress()
  const source = createReadStream(input)
  const destination = createWriteStream(output)
  await pipe(source, gzip, destination)
}






// import { basename, extname, resolve } from "path";



// import directoryChanger from "../../shared/directoryChanger.js";
// import { exist, isDirectory } from "../../shared/utils.js";
// import { log } from "../../shared/log.js";



// const gzExt = ".br";

// export const compress = async (commandData) => {
//   const ext = extname(fileName);
//   const reg = new RegExp(`(${ext}{1})$`);
//   const fullPathToDestination = resolve(
//     directoryPathToDestination,
//     fileName.replace(reg, gzExt)
//   );

//   const readStream = createReadStream(fullPathToFile);
//   const writeStream = createWriteStream(fullPathToDestination);
//   const gzip = createBrotliCompress();

//   readStream.pipe(gzip).pipe(writeStream);
// };


// import { basename, resolve } from "path";
// import { createWriteStream, createReadStream } from "fs";
// import { createBrotliDecompress } from "zlib";

// import directoryChanger from "../../shared/directoryChanger.js";
// import { exist, isDirectory } from "../../shared/utils.js";
// import { log } from "../../shared/log.js";

// const { error, warning } = log;
// const { getCurrentDir } = directoryChanger;

// const fileExt = ".txt";
// const gzExt = ".br";

// export const decompress = async (commandData) => {
  

//   const currentDir = getCurrentDir();
//   const [pathToFile, pathToDestination] = commandData.split(" ");
//   const fullPathToFile = resolve(currentDir, pathToFile);

//   const fileName = basename(fullPathToFile);
//   const directoryPathToDestination = resolve(currentDir, pathToDestination);

//   const reg = new RegExp(`(${gzExt}{1})$`);
//   const fullPathToDestination = resolve(
//     directoryPathToDestination,
//     fileName.replace(reg, fileExt)
//   );

//   const readStream = createReadStream(fullPathToFile);
//   const writeStream = createWriteStream(fullPathToDestination);
//   const unzip = createBrotliDecompress();

//   readStream.pipe(unzip).pipe(writeStream);

//   return new Promise((resolve) => {
//     unzip.on("end", () => {
//       warning(`File decompressed`, 2);

//       resolve();
//     });
//   });
// };