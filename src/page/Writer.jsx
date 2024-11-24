import axios from 'axios';
import Editor from "../components/Editor";
import { useState } from "react";

export default function Writer() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posting, setPosting] = useState(false);

    const axiosNewPost = async (formData) => {
        const response = await axios.post("", formData, {
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

    return (
        <div>
            <div id="head" role="banner" className="namu_head">
                <h3>Thenamu</h3>
                <div className="name_head">
                    <p>namu</p>
                </div>
            </div>
            <div className="category">
                <select className="btn_category">
                    <option value={""}>카테고리</option>
                </select>
            </div>
            <div className="writer_title">
                <textarea className="textarea" placeholder="제목을 입력하세요" onChange={(e) => onTitleChange(e.target.value)}></textarea>
            </div>
            <Editor onContentChange={onContentChange}></Editor>
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