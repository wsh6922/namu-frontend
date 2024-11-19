import Editor from "../components/Editor";

export default function Writer() {

    return (
        <div>
            <div id="head" role="banner" className="namu_head">
                <h3>Thenamu</h3>
                <div className="name_head">
                    <p>namu</p>
                </div>
            </div>
            <div className="btn_category">
                <div>
                </div>
            </div>
            <div className="writer_title">
                <textarea className="textarea" placeholder="제목을 입력하세요"></textarea>
            </div>
            <Editor></Editor>
        </div>
    )

}