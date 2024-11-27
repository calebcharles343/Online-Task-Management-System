import styled from "styled-components";
import media from "../../styles/MediaQuery";

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 73rem;
  margin-top: 7rem;
  ${media.mobile} {
    max-width: 100vw;
  }
`;

export const DetailContainter = styled.div`
  padding: 4.8rem;
  background-color: var(--bg-color-2);
  width: 53rem;

  ${media.tablet} {
    width: 68.9rem;
  }

  ${media.mobile} {
    max-width: 100vw;
    padding: 2rem;
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* ${media.mobile} {
  flex-direction: column;
  margin-bottom: 2rem;
} */
`;

export const DetailTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* min-height: 14.7rem; */
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  /* gap: 0.5rem; */
  margin-bottom: 2rem;

  p {
    color: var(--dark-grey);
    /* margin-bottom: -0.5rem; */
  }

  span {
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }
`;

export const DetailTextContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  line-height: 2.6rem;
  color: var(--dark-grey);

  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

export const JobDescription = styled.div`
  margin-bottom: 2rem;
`;

export const JobRole = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* margin-bottom: 4rem; */

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    list-style: none;
    counter-reset: list-counter;
  }

  li {
    display: flex;
    counter-increment: list-counter;
  }

  li::before {
    content: counter(list-counter) ".";
    font-weight: bold;
    color: var(--violet);
    margin-right: 0.5rem;
    min-width: 2rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
export const ListContainer = styled.ol`
  /* List item styling */
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    word-wrap: break-word; /* Ensures words break properly */
    flex-wrap: wrap; /* Allows content to wrap if needed */
  }

  /* Button styling */
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
  }

  /* Mobile-specific styles */
  ${media.mobile} {
    li {
      flex-wrap: wrap; /* Ensures text wraps on smaller screens */
      align-items: flex-start; /* Adjust alignment to keep items aligned */
    }

    button {
      flex-shrink: 0; /* Prevent button from shrinking */
    }
  }
`;

export const TaskFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2.6rem;
  margin-bottom: 2rem;

  input {
    color: #333;
    width: 35rem;
    padding: 1rem;
  }
  ${media.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;
