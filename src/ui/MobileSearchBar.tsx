import styled from "styled-components";
import Modal from "./Modal";
import { Form } from "react-router-dom";
import Input from "./Input";
import { useFormData } from "../context/FormDataContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import media from "../styles/MediaQuery";

const StyledMobileSeachBar = styled.div`
  display: none;
  background-color: var(--bg-color-2);
  width: 32.7rem;
  height: 8rem;
  border-radius: 5px;
  ${media.mobile} {
    display: block;
  }
`;

const MobileSeachBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  gap: 2rem;
`;

const FilterContainer = styled.div`
  color: var(--header-color);
  width: 32.7rem;
  height: 21.7rem;
`;

const MobileInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  gap: 1rem;
  border-bottom: 1px solid rgba(110, 128, 152, 0.2);
  padding: 0 2.4rem;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
  gap: 1.6rem;
  padding: 2.4rem;
`;

const IconBtn = styled.button`
  background-color: transparent;
  border: none;
`;

function MobileSeachBar() {
  const { formData, updateField, handleSubmit } = useFormData();

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <StyledMobileSeachBar>
        <MobileSeachBarContainer>
          <Input
            name="job"
            placeholder="Enter job Description"
            type="text"
            value={formData.job}
            onChange={(e) => updateField("job", e.target.value)}
            required
          />
          <Modal>
            <Modal.Open open="filter">
              <IconBtn type="button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
                    fill="#6E8098"
                  />
                </svg>
              </IconBtn>
            </Modal.Open>

            <Modal.Window name="filter">
              <FilterContainer>
                <MobileInputContainer>
                  <svg
                    width="17"
                    height="24"
                    viewBox="0 0 17 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z"
                      fill="#5964E0"
                    />
                  </svg>
                  <Input
                    name="country"
                    placeholder="Filter by location"
                    type="text"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                  />
                </MobileInputContainer>

                <SearchContainer>
                  <CheckBox
                    name="fullTimeOnly"
                    checked={formData.fullTimeOnly}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateField("fullTimeOnly", e.target.checked)
                    }
                    label="Full Time Only"
                  />
                  <Button ButtonType="mobile-2">Search</Button>
                </SearchContainer>
              </FilterContainer>
            </Modal.Window>
          </Modal>

          <Button ButtonType="mobile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                fill="#ffff"
              />
            </svg>
          </Button>
        </MobileSeachBarContainer>
      </StyledMobileSeachBar>
    </Form>
  );
}

export default MobileSeachBar;
