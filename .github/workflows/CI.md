Create a workflow file in the '.github/workflows/build_and_test.yml' using GitHub Actions.

Set the workflow name to 'wf-build-and-test'.

The workflow is triggered on three types of events:

1) Push Events: The workflow runs whenever there is a push to the main branch. Additionally, it only triggers if the changes are within the src or tests directories. This ensures that the workflow only runs when relevant files are modified, optimizing the build and test process.

2) Pull Request Events: Similar to push events, the workflow is triggered when a pull request is made to the main branch. Again, it only triggers if the changes are within the src or tests directories. This helps in verifying that the changes in the pull request do not break the build or tests before merging into the main branch.

3) Workflow Dispatch: This allows the workflow to be triggered manually via the GitHub Actions interface. 

Create a job named 'build-and-test' that runs on the latest version of the Windows virtual environment.

Wokflow steps:
- Checkout repository: Use the actions/checkout@v4 action to check out the repository.
- Set up MSYS2: Use the msys2/setup-msys2@v2 action to set up the MSYS2 environment and install the necessary packages (mingw-w64-x86_64-toolchain, mingw-w64-x86_64-cmake, mingw-w64-x86_64-make).
- Add MSYS2 to GITHUB_PATH: Adds the MSYS2 mingw64 bin directory to the PATH.
- Configure CMake: Runs cmake with the MinGW Makefiles generator to configure the project.
- Build: Runs mingw32-make to build the project.
- Run tests: Executes the test binary build\test_task.exe with the --success flag.