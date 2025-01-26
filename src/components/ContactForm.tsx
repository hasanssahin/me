import emailjs from "@emailjs/browser"
import { useFormik } from "formik"
import TextField from "@mui/material/TextField"
import { contactSchema } from "../schemas/ContactSchema"
import { InputAdornment } from "@mui/material"
import TagFacesIcon from "@mui/icons-material/TagFaces"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import { toast } from "react-toastify"
emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY)
export const ContactForm = () => {
  const submit = async (values: any) => {
    try {
      await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, values, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      toast.success("Your message has been sent successfully.")
      resetForm()
    } catch (error) {
      toast.error("An error occurred while sending the message.")
    }
  }

  const { values, handleSubmit, handleChange, resetForm, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: submit,
  })
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-semibold mb-6'>Send Me a Message</h2>
      <div className='w-full flex flex-col gap-y-6'>
        <TextField
          autoComplete='off'
          fullWidth
          id='name'
          value={values.name}
          onChange={handleChange}
          placeholder='Name'
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputAdornment-root": {
              color: "white",
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <TagFacesIcon />
                </InputAdornment>
              ),
            },
          }}
          variant='outlined'
          helperText={<span style={{ color: "#ff6b6b" }}>{errors.name}</span>}
        />
        <TextField
          autoComplete='off'
          fullWidth
          id='email'
          value={values.email}
          onChange={handleChange}
          placeholder='E-mail'
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputAdornment-root": {
              color: "white",
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            },
          }}
          variant='outlined'
          helperText={<span style={{ color: "#ff6b6b" }}>{errors.email}</span>}
        />
        <TextField
          autoComplete='off'
          fullWidth
          id='message'
          multiline
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder='Message'
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          variant='outlined'
          helperText={<span style={{ color: "#ff6b6b" }}>{errors.message}</span>}
        />
        <button type='submit' className='bg-white text-black hover:bg-gray-100 py-2.5 px-6 rounded-lg transition-colors font-semibold'>
          Submit
        </button>
      </div>
    </form>
  )
}
