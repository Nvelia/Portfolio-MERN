import React, { Component } from "react";
import classNames from "classnames";
import { Editor } from "@tinymce/tinymce-react";

export class renderField extends Component {
  state = {
    inputValue: this.props.inputValue,
  };

  editorConfig = {
    plugins: "link,image,lists,paste,code",
    toolbar:
      "undo redo | formatselect bullist numlist | bold italic link | image code paste",
    block_formats: "Paragraph=p;Heading 3=h3",
    menubar: false,
    statusbar: false,
    body_class: "editable-field-content",
    paste_word_valid_elements: "b,strong,i,em,h1,h2,h3,p,li,ul,ol,a",
    paste_retain_style_properties: "none",
    paste_strip_class_attributes: "none",
    paste_remove_styles: true,
  };

  render() {
    const {
      input,
      label,
      type,
      meta: { error },
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className={"form-group"}>
        <label className="form-label">{label}</label>
        {inputValue && type !== "tinymce" && (
          <input
            {...input}
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
            type={type}
            className={classNames("form-control", {
              "is-invalid": error,
            })}
          />
        )}

        {!inputValue && type !== "tinymce" && (
          <input
            {...input}
            type={type}
            className={classNames("form-control", {
              "is-invalid": error,
            })}
          />
        )}

        {type === "tinymce" && (
          <Editor
            {...input}
            value={inputValue}
            apiKey="1azrfjc2kkedm4a6ag32virm439hn631gvi9rhhg8e16rk15"
            onBlur={(event) => {
              this.props.input.onChange(event.target.getContent());
            }}
            config={this.editorConfig}
            className={classNames("form-control", {
              "is-invalid": error,
            })}
          />
        )}

        {error && <small className="form-text text-danger">{error}</small>}
      </div>
    );
  }
}
