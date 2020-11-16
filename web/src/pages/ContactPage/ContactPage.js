import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
      alert('Thank you for your message!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        formMethods={formMethods}
        error={error}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label errorClassName="error" name="name">
          Your name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="name" />

        <Label errorClassName="error" ame="email">
          Your Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="email" />

        <Label errorClassName="error" name="message">
          Your message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="message" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
