/*
 * Copyright 2021-2025 Avaiga Private Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface ErrorFallBackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

const ErrorFallback = (props: ErrorFallBackProps) => (
    <Box sx={{ backgroundColor: "error.main" }}>
        <Box>Something went wrong ...</Box>
        <Box>{props.error.message}</Box>
        <Button onClick={props.resetErrorBoundary} color="secondary">
            Try again
        </Button>
    </Box>
);

export default ErrorFallback;
