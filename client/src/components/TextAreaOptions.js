import '../scss/TextAreaOptions.scss'
import { FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons'

export default function TextAreaOptions() {
  return(
    <div className="TextAreaOptions">
      <div className="btn-group">
        <div className="btn"><FormatBold /></div>
        <div className="btn"><FormatItalic /></div>
        <div className="btn"><FormatUnderlined /></div>
      </div>
    </div>
  )
}