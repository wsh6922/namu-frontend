import axios from 'axios';
import Editor from "../components/Editor";
import { useState, useEffect } from "react";
import CategoryDropdown from '../components/CategoryDropdown';

export default function Writer() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardId, setBoardId] = useState('');
    const [posting, setPosting] = useState(false);
    const [thumbnailImage, setThumbnailImage] = useState('');

    const axiosNewPost = async (formData) => {
        const response = await axios.post("/api/post/create", formData, {
            timeout: 30000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        });
        return response;
    }

    const submit = async () => {
        try {
            setPosting(true);
            const formData = new FormData();
            formData.append("title", title);
            formData.append("content", content);
            formData.append("boardId", boardId);
            formData.append("thumbnailImage", thumbnailImage);

            await axiosNewPost(formData);
            console.log('Post successfully register');
            setPosting(false);
            window.open('/', '_self');
        } catch (e) {
            console.log(e);
        }
    }

    const onTitleChange = e => {
        setTitle(e);
    }

    const onContentChange = e => {
        setContent(e);
    }

    const onBoardChange = e => {
        setBoardId(e);
    }

    const onThumbnailImageHandler = imageUrls => {
        if (imageUrls && imageUrls.length > 0) {
            setThumbnailImage(imageUrls[0]);
        }
    }

    useEffect(() => {
        console.log('썸네일 이미지 Url:', thumbnailImage)
    }, [thumbnailImage]);

    return (
        <div>
            <div id="head" role="banner" className="namu_head">
                <h3>Thenamu</h3>
                <div className="name_head">
                    <p>namu</p>
                </div>
            </div>
            <div className="category">
                <CategoryDropdown setBoardId={onBoardChange}/>
            </div>
            <div className="writer_title">
                <textarea className="textarea" placeholder="제목을 입력하세요" onChange={(e) => onTitleChange(e.target.value)}></textarea>
            </div>
            <Editor onContentChange={onContentChange} onThumbnailImageUpload={onThumbnailImageHandler} />
            {!posting ?
                <div className="content-footer">
                    <button className="btn" onClick={submit}>완료</button>
                </div>
                :
                <div className="content-footer" disabled>
                    <button className="btn">완료</button>
                </div>
            }
        </div>
    )
}