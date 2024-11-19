import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import 'react-quill/dist/quill.snow.css';
// import QuillMarkdown from 'quilljs-markdown';
import { useState, useMemo, useRef } from 'react';

Quill.register('modules/imageResize', ImageResize);

export default function Editor() {
    const quillRef = useRef();

    const [content, setContent] = useState('');

    const imageUploadHandler = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*')
        input.click();

        input.addEventListener('change', async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('image', file);

            // try {
            //     const result = await axiosPostNewImage(formData)
            //     const imageUrl = result.data.data;
            //     const editor = quillRef.current.getEditor();
            //     const range = editor.getSeletion();
            //     editor.inserEmbed(range.index, 'image', imageUrl);
            // } catch (e) {
            //     console.log(e);
            //     alert("이미지 업로드에 실패했습니다.")
            // }
        })
    }


    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    ['image'],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'size': ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['clean']
                ],
                handlers: {
                    image: imageUploadHandler,
                },
            },
            // markdownOptions: {},
            imageResize: {
                parchment: Quill.import('parchment'),
                modules: ['Resize', 'Toolbar'],
            },
        }
    }, [])

    const format = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'code-block',
        'list',
        'indent',
        'image',
        'color',
        'background',
        'clean'
    ]

    const handleChange = e => {
        setContent(e);
    }

    return (
        <>
            <ReactQuill
                ref={quillRef}
                formats={format}
                modules={modules}
                value={content}
                onChange={handleChange}
            />
        </>
    );
}  