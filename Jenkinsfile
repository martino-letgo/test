#!groovy​

properties([[$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', numToKeepStr: '10']]])

//global vars
branch_type = get_branch_type "${env.BRANCH_NAME}"
branch_deployment_environment = get_branch_deployment_environment branch_type



//choose steps based on the branch_type
switch(branch_type) {
	case "dev":    		
		node { 	
			build()
			uploadToS3()
			deploy(branch_deployment_environment)
			e2eTest() 
		}
    		break
  	case "master":
		node { 
			build()
			uploadToS3()
			deploy(branch_deployment_environment)
			e2eTest() 
		}
    		break
  	case "release":
		node {
			build()
			uploadToS3()
			deploy(branch_deployment_environment)
			e2eTest() 
			deploy("prod")
		}
    		break
  	case "feature":
		node {
			build()
		}
		break
	case "PR":
		node {
			build()
		}
		break
  	default:
    		throw err
    		break
}


// Utility functions
def get_branch_type(String branch_name) {
    def dev_pattern = ".*dev"
    def release_pattern = ".*release/.*"
    def feature_pattern = ".*feature/.*"
    def hotfix_pattern = ".*hotfix/.*"
    def master_pattern = ".*master"
    if (branch_name =~ dev_pattern) {
        return "dev"
    } else if (branch_name =~ release_pattern) {
        return "release"
    } else if (branch_name =~ master_pattern) {
        return "master"
    } else if (branch_name =~ feature_pattern) {
        return "feature"
    } else if (branch_name =~ hotfix_pattern) {
        return "hotfix"
    } else {
        return null;
    }
}

def get_branch_deployment_environment(String branch_type) {
    if (branch_type == "dev") {
        return "dev"
    } else if (branch_type == "release") {
        return "staging"
    } else if (branch_type == "master") {
        return "prod"
    } else {
        return null;
    }
}

def build(){
	stage ("Build"){
		checkout scm
		setVersion()		
		echo "Building brench type: ${branch_type}"
		sh "sleep 5s"
		echo "Unit Tests"
	}
}


def uploadToS3(){
	stage ("Upload to S3"){
		echo "upload artifact to S3"
	}
}

def deploy(String environment){
	stage ("Deploy to ${environment}"){
		if ( environment == "prod") {
            		timeout(time: 1, unit: 'DAYS') {
                		input "Deploy to ${environment} ?"				
            		}
		}
		//TODO specify the deployment
		sh "echo Deploying to ${environment}"
	}	
}

def e2eTest(){
	stage("e2e tests"){
		sh "echo Running e2e regression tests in ${branch_deployment_environment}"
	}
}

def mvn(String goals) {
    def mvnHome = tool "Maven-3.2.3"
    def javaHome = tool "JDK1.8.0_102"

    withEnv(["JAVA_HOME=${javaHome}", "PATH+MAVEN=${mvnHome}/bin"]) {
        sh "mvn -B ${goals}"
    }
}

def setVersion() {
    currentBuild.displayName = "${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
}
