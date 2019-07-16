import registerSchema from "./registerForm/schema.json";
import registerUiSchema from "./registerForm/ui-schema.json";
import questSchema from "./questForm/schema.json";
import questUiSchema from "./questForm/ui-schema.json";
let register = { schema: registerSchema, uiSchema: registerUiSchema };
let quest = { schema: questSchema, uiSchema: questUiSchema };
export default { register, quest };