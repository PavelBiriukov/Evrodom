import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
    IMAGE = 'image'
}

@Injectable()
export class FileService{

    async createFile(type: FileType, files: any[]): Promise<string[]> {
        try {
            if (!Array.isArray(files) || files.length === 0) {
                throw new HttpException('Files array is empty or undefined', HttpStatus.BAD_REQUEST);
            }
            const fileArray: string[] = [];
    
            await Promise.all(
                files.map(async (file) => {
                    const fileExtension = file.originalname.split('.').pop();
                    const fileName = uuid.v4() + '.' + fileExtension;
                    const filePath = path.join(__dirname, '../', 'static', type);
    
                    if (!fs.existsSync(filePath)) {
                        fs.mkdirSync(filePath, { recursive: true });
                    }
                    try {
                        await fs.promises.writeFile(path.join(filePath, fileName), file.buffer);
                        fileArray.push(type + '/' + fileName);
                    } catch (error) {
                        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                })
            );
            return fileArray;
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    removeFile(fileName: string) {

    }

}