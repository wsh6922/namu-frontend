import Editor from "../components/Editor";
import { useState } from "react";

export default function Writer() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
            <div className="content-footer">
                <button className="btn">완료</button>
            </div>
        </div>
    )
}