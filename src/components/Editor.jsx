import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillMarkdown from 'quilljs-markdown';
import { useMemo, useRef } from 'react';

export default function Editor() {
    const quillRef = useRef();

    const imageUploadHandler = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*')
        input.click();

        input.addEventListener('change', async () => { 
            const file = input.files[0];
            const formData = new FormData();
            formData.append('image', file);

            try {
                const result = await axiosPostNewImage(formData);
                const imageUrl = result.data.data;
                const editor = quillRef.current.getEditor();
                const range = editor.getSeletion();
                editor.inserEmbed(range.index, 'image', imageUrl);
            } catch (e) {
                console.log(e);
                alert("이미지 업로드에 실패했습니다.")
            }
        })
    }


    const modules = useMemo(() => { 
        return {
            markdownOptions: {},
            toolbar: {
                container: [ 
                    [ {'header': [1, 2, 3, 4, 5, 6, false]}, {'size': ['small', false, 'large', 'huge']}],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    [{'align': []}],
                    ['image']
                    [{'color': []}, {'background': []}]
                    ['clean']
                ],
                handlers: {
                    image: imageUploadHandler,
                },
            }
        }
    }, [])

    return(
        <div>

        </div>
    );
}  