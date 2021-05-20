import { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import TagService from './../../../service/tag.service'

class TagSelection extends Component {
    constructor() {
        super()
        this.state = {
            tags: []
        }

        this.tagService = new TagService()
    }

    componentDidMount() {
        this.tagService
            .getAllTags()
            .then(tags => {
                let tagOptions = []
                tags.data.forEach(elem => {
                    tagOptions.push({ value: elem._id, label: elem.name })
                })

                this.setState({ tags: tagOptions })
            })
            .catch(err => console.log(err))
    }

    render() {
        const animatedComponents = makeAnimated()

        return (
            <Select
                classNamePrefix="tag-selection"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={this.state.tags}
                onChange={tags => this.props.updateTags(tags)}
                defaultValue={this.props.initialTags}
                styles={{ menu: provided => ({ ...provided, zIndex: 9999 }) }}
            />
        )
    }
}

export default TagSelection