import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { convertToHTML } from 'draft-convert'
import { Editor } from 'react-draft-wysiwyg'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { Component } from 'react'

// https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
// https://stackoverflow.com/questions/63015073/how-to-customize-the-style-for-react-draft-wysiwyg
class CustomEditor extends Component {

    constructor() {
        super()
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    componentDidMount() {
        this.setState(
            {
                editorState: EditorState.createWithContent(
                    ContentState
                        .createFromBlockArray(convertFromHTML(this.props.postContent)))
            })
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState })
        this.props.updateState(convertToHTML(editorState.getCurrentContent()))
    }

    render() {
        const { editorState } = this.state

        return (
            <div>
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="t-postEditor"
                    editorState={editorState}
                    onEditorStateChange={state => this.onEditorStateChange(state)}
                />
            </div>
        )
    }
}

export default CustomEditor