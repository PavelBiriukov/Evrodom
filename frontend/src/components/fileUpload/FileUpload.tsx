import React, {useRef} from 'react';
import cl from './fileUpload.module.css'
interface FileUploadProps {
    setFile: any;
    accept: string;
    children: any
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}: any) => {
    const ref: any = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files);
        }
    }

    return (
        <div className={cl.block} onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}  
                style={{display: "none"}}
                ref={ref}
                onChange={onChange}
                multiple
            />
            {children}
        </div>
    );
};

export default FileUpload;