import Layout from "../../components/layout/Layout";
import NotFound from "../../components/layout/NotFound";
import JobDetails from "../../components/job/JobDetails";
import axios from "axios";

export default function JobDetailsPage({ job, candidates, access_token, error }) {
  if (error) return <NotFound />;
  return (
    <Layout title={job.title}>
      <JobDetails job={job} candidates={candidates} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`);
    const job = res.data.job;
    const candidates = res.data.candidates;
    const access_token = req.cookies.access || "";

    return {
      props: {
        job,
        candidates,
        access_token,
      },
    };
  } catch (error) {
    // Return a default error object or null if there's an error
    return {
      props: {
        error: error.response?.data?.detail || "An error occurred",
      },
    };
  }
}